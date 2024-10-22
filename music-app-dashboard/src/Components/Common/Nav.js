
import React from 'react'

export const Nav = () => {
    return (
        <nav>
        <div class="wrapper">
            <header class="main-header">
                <a href=" index2.html" class="logo"><b>Admin Music</b> </a>
                <nav class="navbar navbar-static-top" role="navigation">
                    <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </a>
                    <div class="navbar-custom-menu">
                        <ul class="nav navbar-nav">

                            <li class="dropdown user user-menu">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                    <img src="./dist/img/user2-160x160.jpg" class="user-image" alt="User Image" />
                                    <span class="hidden-xs">omkmmomoim</span>
                                </a>
                                <ul class="dropdown-menu">
                                    <li class="user-header">
                                        <img src="./dist/img/user2-160x160.jpg" class="img-circle" alt="User Image" />
                                        <p> hello
                                            <small>Member since Nov. 2024</small>
                                        </p>
                                    </li>

                                    <li class="user-footer">
                                        <div class="pull-left">
                                            <a href="profile.php" class="btn btn-default btn-flat">Profile</a>
                                        </div>
                                        <div class="pull-right">
                                            <a href="logout.php" class="btn btn-default btn-flat">Sign out</a>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>

            <aside class="main-sidebar">

                <section class="sidebar">

                    {/* <div class="user-panel">
                        <div class="pull-left image">
                            <img src="./dist/img/user2-160x160.jpg" class="img-circle" alt="User Image" />
                        </div>
                        <div class="pull-left info">
                            <p>rahul</p>

                            <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
                        </div>
                    </div> */}

                    <ul class="sidebar-menu">

                        <li class="treeview">
                            <a href="/Dashboard">
                                <i class="fa fa-dashboard"></i> <span>Dashboard</span>
                            </a>

                        </li>
                        <li class="treeview">
                            <a href="one-release">
                                <i class="fa fa-dashboard"></i> <span>One Release</span>
                            </a>
                        </li>

                    </ul>
                </section>
            </aside>
        </div>
        </nav> 
    )
}
