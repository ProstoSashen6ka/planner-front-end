import { IAuthForm, IAuthResponse } from '@/types/auth.types'

import { axiosClassic } from '@/api/axios'

import { removeFromStorage, saveTokenStorage } from './auth-token.service'

export const authService = {
	async register(formData: FormData) {
		const response = await axiosClassic.post<IAuthResponse>(
			'/auth/register',
			{
				email: formData.get("email"),
				password: formData.get("password"),
			}
		)

		if (response.data.accessToken) saveTokenStorage(response.data.accessToken)
		
		
	},

	async login(formData: FormData) {
		const response = await axiosClassic.post<IAuthResponse>(
			'/auth/login',
			{
				email: formData.get("email"),
				password: formData.get("password"),
			}
		)

		if (response.data.accessToken) saveTokenStorage(response.data.accessToken)

	},

	async getNewTokens() {
		const response = await axiosClassic.post<IAuthResponse>(
			'/auth/login/access-token'
		)

		if (response.data.accessToken) {saveTokenStorage(response.data.accessToken)}

		return response
	},

	async logout() {
		const response = await axiosClassic.post<boolean>('/auth/logout')

		if (response.data) removeFromStorage()

		return response
	}
}