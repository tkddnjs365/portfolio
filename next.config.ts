import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: '/portfolio', // GitHub Pages 서브패스용
  assetPrefix: '/portfolio', // 정적 파일 경로 설정
};

export default nextConfig;