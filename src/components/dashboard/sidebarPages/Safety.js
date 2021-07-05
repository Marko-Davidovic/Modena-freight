import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

export default function Accounting() {
	const useStyles = makeStyles((theme) => ({

		toolbar: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'flex-start',
			padding: theme.spacing(3, 9),
			// necessary for content to be below app bar
			...theme.mixins.toolbar,
		},
		content: {
			flexGrow: 1,
			padding: theme.spacing(3),
		},
	}));

	const classes = useStyles();
	return (
		<main className={classes.content}>
			<div className={classes.toolbar} >

				<p>This is SAFETY</p>

			</div>
		</main >
	)
}
