import React, { useState } from "react";
import { images } from "../../assets/images";
import AuthController from "../../Controllers/Auth-controller/AuthController";

export const Nav = () => {
  const { userData } = AuthController()
  const [financialMenu, setFinancialMenu] = useState(false)
  const [catelogMenu, setCatelogMenu] = useState(false)
  const [profileMenu, setProfileMenu] = useState(false)


  return (
    <nav>

      <div className="wrapper">
        <header className="main-header">
          <a href=" index2.html" className="logo">
            <b>Music Dashboard</b>{" "}
          </a>
          <nav className="navbar navbar-static-top" role="navigation">
            <a
              href="#"
              className="sidebar-toggle"
              data-toggle="offcanvas"
              role="button"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </a>
            <div className="navbar-custom-menu">
              <ul className="nav navbar-nav">
                <li className="dropdown user user-menu">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    <img
                      src={images.user}
                      className="user-image"
                      alt="User Image"
                    />
                    <span className="hidden-xs">{userData.name}</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="user-header">
                      <img
                        src={images.user}
                        className="img-circle"
                        alt="User Image"
                      />
                      <p>
                        {" "}
                        hello
                        <small>Member since Nov. 2024</small>
                      </p>
                    </li>

                    <li className="user-footer">
                      <div className="pull-left">
                        <a href="profile.php" className="btn btn-default btn-flat">
                          Profile
                        </a>
                      </div>
                      <div className="pull-right">
                        <a href="logout.php" className="btn btn-default btn-flat">
                          Sign out
                        </a>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
        </header>

        <aside className="main-sidebar">
          <section className="sidebar">
            <div className="user-panel">
              <div className="pull-left image">
                <img
                  src={images.user}
                  className="img-circle"
                  alt="User Image"
                />
              </div>
              <div className="pull-left info">
                <p>{userData.name}</p>

                <a href="#">
                  <i className="fa fa-circle text-success"></i> Online
                </a>
              </div>
            </div>

            <ul className="sidebar-menu">
              <li className="treeview">
                <a href="/Dashboard">
                  <i className="fa fa-dashboard"></i> <span>Dashboard</span>
                </a>
              </li>
            </ul>
            <ul className="sidebar-menu">
              <li className="treeview">
                <a href="one-release">
                  <i className="fa fa-dashboard"></i> <span>One Release</span>
                </a>
              </li>
            </ul>
            <ul className="sidebar-menu">
              <li className="treeview">
                <a href="over-view">
                  <i className="fa fa-dashboard"></i> <span>OverView</span>
                </a>
              </li>
            </ul>
            <ul className="sidebar-menu">
              <li className="treeview">
                <a href="#" onClick={() => { setCatelogMenu(!catelogMenu) }}>
                  <i className="fa fa-dashboard"></i> <span>Catalog</span> <i className="fa fa-angle-left pull-right"></i>
                </a>

              </li>
              {catelogMenu &&
                <div>
                  <li>
                    <a href="all-release">
                      <i className="fa fa-circle-o"></i>All Release</a></li>
                  <li><a href="all-tracks"><i className="fa fa-circle-o"></i> All Tracks</a></li>
                </div>
              }
            </ul>
            <ul className="sidebar-menu">
              <li className="treeview">
                <a href="daily-treads">
                  <i className="fa fa-dashboard"></i> <span>Daily Treads</span>
                </a>
              </li>
            </ul>

            <ul className="sidebar-menu">
              <li className="treeview">
                <a href="#" onClick={() => { setFinancialMenu(!financialMenu) }}>
                  <i className="fa fa-dashboard"></i> <span>Financial</span> <i className="fa fa-angle-left pull-right"></i>
                </a>

              </li>
              {financialMenu &&
                <ul>
                  <li><a href="payment-operations"><i className="fa fa-circle-o"></i> Payment & operations</a></li>
                  <li><a href="financial-reports"><i className="fa fa-circle-o"></i> Financial reports</a></li>
                </ul>
              }
            </ul>
            <ul className="sidebar-menu">
              <li className="treeview">
                <a href="user-access">
                  <i className="fa fa-dashboard"></i> <span>User Access</span>
                </a>
              </li>
            </ul>
            <ul className="sidebar-menu">
              <li className="treeview">
                <a href="#" onClick={() => { setProfileMenu(!profileMenu) }}>
                  <i className="fa fa-dashboard"></i> <span>Account</span> <i className="fa fa-angle-left pull-right"></i>
                </a>
              </li>
              {profileMenu &&
                <ul className="treeview">

                 
                    <li className="treeview">
                      <a href="profile">
                        <i className="fa fa-dashboard"></i> <span>Profile</span>
                      </a>
                    </li>
                  
                 
                    <li className="treeview">
                      <a href="password-change">
                        <i className="fa fa-dashboard"></i> <span>Password</span>
                      </a>
                    </li>
                  
                 
                    <li className="treeview">
                      <a href="bank-information">
                        <i className="fa fa-dashboard"></i> <span>Bank Information</span>
                      </a>
                    </li>
                  
                </ul>
              }
            </ul>

            <ul className="sidebar-menu">
              <li className="treeview">
                <a href="support">
                  <i className="fa fa-dashboard"></i> <span>Support</span>
                </a>
              </li>
            </ul>

            <ul className="sidebar-menu">
              <li className="treeview">
                <a href="one-release">
                  <i className="fa fa-dashboard"></i> <span>Logout</span>
                </a>
              </li>
            </ul>
          </section>
        </aside>
      </div>
    </nav>
  );
};
