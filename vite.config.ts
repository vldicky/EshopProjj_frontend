import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({

  plugins: [
    react()
    // react({
    //   jsxImportSource: '@emotion/react',
    // })
  ],
  // babel: {
  //   plugins: ['@emotion/babel-plugin'],
  // },
})

// optimizeDeps: {
//   include: [
//     '@emotion/react',
//     '@emotion/styled',
//     '@mui/material/Tooltip'
//   ],
// },