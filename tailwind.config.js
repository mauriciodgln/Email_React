/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx}"],
  theme: {
    screens:{
      'sm': '640px',
      'md': '960px',
      'lg': '1440px',
    },
    extend: {
      maxHeight: {
        '112': '28rem',
        '77': '19.15',
      },
      backgroundImage: {
        'attach-files': "url('https://www.gstatic.com/images/icons/material/system/1x/attach_file_black_20dp.png')",
        'delete': "url('https://www.gstatic.com/images/icons/material/system/1x/delete_black_20dp.png')",
        'not-starred': "url('https://www.gstatic.com/images/icons/material/system/1x/star_border_black_20dp.png')",
        'starred': "url('https://www.gstatic.com/images/icons/material/system/1x/star_googyellow500_20dp.png')",
        'edit': "url('https://www.gstatic.com/images/icons/material/system/1x/archive_black_20dp.png')",
      }
    },
  },
  plugins: [],
}
