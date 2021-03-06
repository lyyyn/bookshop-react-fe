import React, { Component } from 'react'  
import AppBar from '@material-ui/core/AppBar';  
import Toolbar from '@material-ui/core/Toolbar';  
import { Notifications } from '@material-ui/icons';  
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import styles from './styles.module.css';


const useStyles = makeStyles({
    root: {
      background: 'rgb(73,58,77)',
      border: 0,
      color: 'white',
      boxShadow: 'none',
    }
  });

  
export default function SearchNav () {  
    const classes = useStyles();  
        return (  
            <React.Fragment>  
                <AppBar position="static" className={classes.root} >  
                    <Toolbar>
                        <div id={styles.logo}>
                         <img src='https://www.pngkit.com/png/full/381-3812397_a-graphical-icon-of-a-stack-of-books.png'/>
                        </div>
                        <div id={styles.logoText}>
                         <span className={styles.iconText}>React Bookstore</span>
                        </div>
                        <div id={styles.searchComponent}>
                            <div id={styles.searchIcon}>
                                <SearchIcon/>
                            </div>
                            <div id={styles.searchInput}>
                                <input id={styles.searchBox}></input>
                            </div>
                            <div id={styles.searchButton}>
                                <button>Search</button>
                            </div>
                        </div>
                    </Toolbar>  
                </AppBar>     
            </React.Fragment>  
        )  
}  

  