/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  safelist: [ //用於指定特定css不被刪除(動態生成用)
    "w-1/2",
    "w-1/3",
    "w-1/4",
    "w-full",
    "bg-red-800",
    "hover:bg-red-700",
    "text-right"
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      "1200SIZE": '1200px',
      "1000SIZE": '1000px',
      "720SIZE": '720px',
      "600SIZE": '600px',
    },
    fontFamily: {
      'HeitiTC': ['Heiti TC'],
      'NunitoSans': ['Nunito Sans']
    },
    extend: {
      colors: {
        gary: "#f00",
      },
      backgroundImage: {
        'firstPage': "url('@/assets/images/image_background.svg')",
      },
    },
  },
  plugins: [],
};

// 1.npm install -D tailwindcss postcss autoprefixer
// 2.npx tailwindcss init -p
// 3.創建本文件
// 4.創建css 及 引入css (main.js中引用)
