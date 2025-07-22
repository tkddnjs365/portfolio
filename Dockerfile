# Dockerfile : 도커 이미지를 만들기 위한 설계도

# 문법 #
# From : 어떤 이미지를 기반으로 새로운 이미지를 만들것인가를 정함
# As : ~ 라는 이름으로 설정 즉  알리아스(Alias)
# Run : 명령어 실행
# apk : Alpine 리눅스의 패키지 매니저 ( 프로그램 설치 )
# add : apk의 하위 명령어로 설치
# --no-cache : 설치후 캐시 파일을 남기지 말라는 옵션
# WORKDIR : 작업할 폴더를 정함
# COPY : 파일을 복사


# Node.js 18 Alpine 이미지 사용
FROM node:18-alpine AS base

#--------------------------------------------------------------------------#
# 의존성 설치 단계
#--------------------------------------------------------------------------#
# base이미지를 기반으로 deps라는 새로운 스테이지 시작
FROM base AS deps
# Alpine Linux 패키지 매니저로 glibc 호환 라이브러리 설치
RUN apk add --no-cache libc6-compat
# 컨테이너 내작업 디렉토리를 /app으로 설정
WORKDIR /app

# package.json과 package-lock.json 복사
COPY package*.json ./
# package-lock.json 을 기반으로 의존성들 설치
RUN npm ci


#--------------------------------------------------------------------------#
# 빌드 단계
#--------------------------------------------------------------------------#
FROM base AS builder
WORKDIR /app
# deps스테이지에서 설치한 node_modules를 현재 스테이지에 복사
COPY --from=deps /app/node_modules ./node_modules
# 현재 티렉토리의 모든 소스코드를 컨테이너로 복사
COPY . .
# Next.js 빌드
RUN npm run build


#--------------------------------------------------------------------------#
# 실행 단계
#--------------------------------------------------------------------------#
FROM base AS runner
WORKDIR /app

# node.js 환경을 프로덕션으로 설정
ENV NODE_ENV production

# 시스템 사용자 추가
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# 빌드된 파일들 복사
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# 컨티에너 실행 시 next 사용자로 전환
USER nextjs

# 컨테이너가 3000번 포트 사용
EXPOSE 3000

# 애플리케이션이 사용할 포트 설정
ENV PORT 3000

# 모든 네트워크 인터페이스에서 접근 허용
ENV HOSTNAME "0.0.0.0"

# 컨테이너 시작 시 실행할 명령어
CMD ["node", "server.js"]