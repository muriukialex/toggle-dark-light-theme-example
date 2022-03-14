import { useContext } from 'react'
import { ThemeContext } from './ThemeContext/ThemeContext'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { HiOutlineSun } from 'react-icons/hi'

const Header = () => {
	const { theme, changeTheme } = useContext(ThemeContext)

	return (
		<>
			<h1>Enable {theme.theme === 'dark' ? 'light' : 'dark'} mode</h1>
			<span
				onClick={() => changeTheme(theme.isLight)}
				style={{ cursor: 'pointer' }}
			>
				{theme.theme === 'dark' ? <HiOutlineSun /> : <BsFillMoonStarsFill />}
			</span>
		</>
	)
}

export default Header
