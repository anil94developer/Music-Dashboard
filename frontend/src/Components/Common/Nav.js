import React, { useState, useEffect } from "react";
import { images } from "../../assets/images";
import AuthController from "../../Controllers/Auth-controller/AuthController";

export const Nav = (props) => {
  // const { setUserData } = props
  const { userData, handleLogout, userPermission } = AuthController()
  const [financialMenu, setFinancialMenu] = useState(false)
  const [subMenu, setSubMenu] = useState("")
  const [profileMenu, setProfileMenu] = useState(false)
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  // useEffect(() => {
  //   if (userData) {
  //     setUserData(userData);
  //   }
  // }, [])

  const renderIcon = (name) => {
    return name == "Dashboard" ? "fa fa-dashboard"
      : name == "One Release" ? "fa fa-caret-square-o-left"
        : name == "Catalog" ? "fa  fa-bullseye"
          : name == "Daily Trends" ? "fa fa-clock-o"
            : name == "Financial" ? "fa  fa-money"
              : name == "User Mangement" ? "fa fa-users"
                : name == "User Mangement" ? "fa fa-retweet"
                  : name == "Withdraw Request" ? "fa fa-sort-amount-asc"
                    : name == "All Transcations" ? "fa fa-random"
                      : "fa fa-sort-amount-asc"


  }
  return (
    <nav style={{ backgroundColor: '#000' }}>
      <div style={{ backgroundColor: '#000' }}>
        <header className="main-header" style={{ backgroundColor: '#000' }}>
          <a className="logo">
            <b>Music Dashboard</b>{" "}
          </a>
          <nav className="navbar navbar-static-top" role="navigation" style={{ backgroundColor: '#000' }}>
            {/* <a
              href="#"
              className="sidebar-toggle"
              data-toggle="offcanvas"
              role="button"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar">da</span>
              <span className="icon-bar">dasd</span>
              <span className="icon-bar">dsada</span>
            </a> */}
            <div className="navbar-custom-menu">
              <ul className="nav navbar-nav">
                <li className="dropdown user user-menu" style={{ backgroundColor: '#000' }}>
                  <a href="#" className="dropdown-toggle" onClick={toggleDropdown}>
                    <img
                      src={images?.user}
                      className="user-image"
                      alt="User Image"
                    />
                    <span className="hidden-xs">{userData?.name}</span>
                    <span className="hidden-xs">{userData?.email}</span>
                  </a>
                  {dropdownVisible &&
                    <div className="modal" style={{ display: 'block', marginTop: -50, }} onClick={toggleDropdown}>
                      <div style={{
                        position: 'absolute',
                        right: 0,
                      }}>
                        <div className="modal-content">
                          <div className="modal-body" style={{}}>
                            {userPermission?.menuPermission && userPermission?.menuPermission?.map((item, index) => {
                              let link = `/${item.mainMenuName}`;
                              return item.status
                                && item.mainMenuName == 'User Access' &&
                                <ul className="sidebar-menu">
                                  <li className="treeview">
                                    <a href={link}>
                                      <i className="fa fa-sitemap"></i> <span>{item.mainMenuName}</span>
                                    </a>
                                  </li>
                                </ul>
                            })}
                            <ul className="sidebar-menu">
                              <li className="treeview">
                                <a href="password change">
                                  <i className="fa fa-lock"></i> <span>Change Password</span>
                                </a>
                              </li>
                            </ul>
                            <ul className="sidebar-menu">
                              <li className="treeview">
                                <a href="profile">
                                  <i className="fa fa-user"></i> <span>Profile</span>
                                </a>
                              </li>
                            </ul>
                            <ul className="sidebar-menu">
                              <li className="treeview">
                                <a href="bank information">
                                  <i className="fa fa-bank"></i> <span>Bank Information</span>
                                </a>
                              </li>
                            </ul>
                            <ul className="sidebar-menu">
                              <li className="treeview">
                                <a href="Support">
                                  <i className="fa fa-support"></i> <span>Support</span>
                                </a>
                              </li>
                            </ul>
                            <ul className="sidebar-menu">
                              <li className="treeview">
                                <a href="" onClick={handleLogout}>
                                  <i className="fa fa-sign-out"></i> <span>Logout</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  }
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <aside className="main-sidebar" style={{ backgroundColor: '#000', height: 'auto' }}>
          <section className="sidebar" style={{ backgroundColor: '#000' }}>
            <div className="user-panel" style={{ backgroundColor: '#000' }}>
              <div className="pull-left image form-row" style={{ borderBottomStyle: 'solid', borderBottomWidth: 0, borderBottomColor: '#fff', marginTop: 10, padding: 5 }}>
                <img
                  src={images.user}
                  className="img-circle"
                  alt="User Image"
                />
                <p>{userData?.email}</p>
              </div>
            </div>


            {/* <div className="pull-left image form-row" style={{ borderBottomStyle: 'solid', borderBottomWidth: 2, borderBottomColor: '#fff', marginTop: 10, padding: 5 }}> */}

            {userPermission && userPermission?.menuPermission?.map((item, index) => {
              let link = `/${item.mainMenuName}`;
              return item.status &&
                item.mainMenuName != 'User Access' &&
                item.mainMenuName != 'Support' &&
                item.mainMenuName != 'Multiple Release' &&

                <ul className="sidebar-menu">
                  <li className="treeview">
                    {item.submenu.length > 0 ?
                      <a onClick={() => { subMenu == index ? setSubMenu(-1) : setSubMenu(index) }}>
                        <i className={renderIcon(item.mainMenuName)}></i> <span>{item.mainMenuName}</span>
                      </a>
                      :
                      <a href={link}>
                        <i className={renderIcon(item.mainMenuName)}></i> <span>{item.mainMenuName}</span>
                      </a>
                    } </li>
                  {index == subMenu ?
                    item.submenu.map((item, index) => {
                      let subMenuLink = `/${item.subMenuName}`;
                      return item.status && <li><a href={subMenuLink}><i className="fa fa-circle-o"></i>{item.subMenuName}</a></li>

                    })
                    :
                    <></>

                  }

                </ul>




            })


            }

            <ul className="sidebar-menu">
              <li className="treeview">
                <a href="/Upload" >
                  <i className="fa fa-dashboard"></i> <span>Upload</span>
                </a>
              </li>
            </ul>


            {/* </div> */}


            {/* <aside className="main-sidebar">
          <section className="sidebar">
            <div className="user-panel">
              <div className="pull-left image form-row" style={{ borderBottomStyle: 'solid', borderBottomWidth: 2, borderBottomColor: '#fff', marginTop: 10, padding: 5 }}>
                <img
                  src={images.user}
                  className="img-circle"
                  alt="User Image"
                />
                <p>{userData?.email}</p>
              </div>
            </div>
            {userPermission && userPermission?.menuPermission?.map((item, index) => {
              let link = `/${item.mainMenuName}`;
              return item.status && <ul className="sidebar-menu">
                <li className="treeview">
                  <a href={link}>
                    <i className="fa fa-dashboard"></i> <span>{item.mainMenuName}</span>
                  </a>

                  {item.submenu.map((item, index) => {
                    let subMenuLink = `/${item.subMenuName}`;
                    return item.status && <li><a href={subMenuLink}><i className="fa fa-circle-o"></i>{item.subMenuName}</a></li>

                  })}
                </li>
              </ul>

            })

            } 
            <ul className="sidebar-menu">
              <li className="treeview" onClick={handleLogout}>
                <a href="#" >
                  <i className="fa fa-dashboard"></i> <span>Logout</span>
                </a>
              </li>
            </ul>

          </section>
        </aside> */}
          </section>

        </aside>
      </div>
    </nav>
  );
};
