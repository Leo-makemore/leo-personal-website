import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // ✅ 必须加这个才能用 next export
};

export default nextConfig;