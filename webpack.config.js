import { resolve as _resolve } from 'path'

export const mode = 'development'
export const entry = _resolve(__dirname, './src/index.js')
export const devtool = 'eval-source-map'
export const module = {
	rules: [
		{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			use: ['babel-loader'],
		},
		{
			test: /\.(s(a|c)ss)$/,
			use: ['style-loader', 'css-loader', 'sass-loader'],
		},
	],
}
export const resolve = {
	extensions: ['*', '.js', '.jsx'],
}
export const output = {
	path: _resolve(__dirname, './public'),
	filename: 'bundle.js',
}
export const devServer = {
	contentBase: _resolve(__dirname, './public'),
	hot: true,
}
