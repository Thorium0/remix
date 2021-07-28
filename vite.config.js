/**
 * @ Author: ManonIcu
 * @ Create Time: 2021/7/2 11:18
 * @ Modified by: ManonIcu
 * @ Modified time: 2021/7/2 11:18
 * @ Description:
 */
import {resolve} from "path"
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve:{
		alias:{
			"@":resolve("src")
		}
	}
})