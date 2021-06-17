import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import NavBar from "./NavBar"
import ClosedCaptionRoundedIcon from '@material-ui/icons/ClosedCaptionRounded';
import HeadsetMicRoundedIcon from '@material-ui/icons/HeadsetMicRounded';
import DescriptionRoundedIcon from '@material-ui/icons/DescriptionRounded';
import FeaturedVideoRoundedIcon from '@material-ui/icons/FeaturedVideoRounded';

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	drawerContainer: {
		overflow: 'auto',
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
}));

export default function ClippedDrawer(props) {
	const classes = useStyles();
	const { history } = props;
	const itemList = [{
		text: 'Office',
		icon: <InboxIcon />,
		onClick: () => history.push('/dashboard')
	}, {
		text: 'Accounting',
		icon: <ClosedCaptionRoundedIcon />,
		onClick: () => history.push('/dashboard/accounting')
	}, {
		text: 'Dispatch',
		icon: <HeadsetMicRoundedIcon />,
		onClick: () => history.push('/dashboard/dispach')
	}, {
		text: "Safety",
		icon: <DescriptionRoundedIcon />,
		onClick: () => history.push('/dashboard/safety')

	}, {
		text: "Recruting",
		icon: <FeaturedVideoRoundedIcon />,
		onClick: () => history.push('/dashboard/rectruting')

	}];

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar position="fixed" className={classes.appBar}>
				<NavBar />
			</AppBar>
			<Drawer
				className={classes.drawer}
				variant="permanent"
				classes={{
					paper: classes.drawerPaper,
				}}

			>
				<Toolbar />
				<div className={classes.drawerContainer}>
					<List className={classes.list}>
						{itemList.map((item, index) => {
							const { text, icon, onClick } = item;
							return (
								<ListItem button key={text} onClick={onClick}>
									{icon && <ListItemIcon>{icon}</ListItemIcon>}
									<ListItemText primary={text} />
								</ListItem>
							);
						})}
					</List>
					<Divider />
					<List>
						{['All mail', 'Trash', 'Spam'].map((text, index) => (
							<ListItem button key={text}>
								<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
								<ListItemText primary={text} />
							</ListItem>
						))}
					</List>
				</div>
			</Drawer>
			<main className={classes.content}>
				<Toolbar />
			</main>
		</div >
	);
}

