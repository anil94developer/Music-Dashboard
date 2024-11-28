import React, { useState ,useEffect} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { base } from "../../Constants/Data.constant";
import { getData, postData, putData } from "../../Services/Ops";
import { Nav } from "../Common/Nav";
import SearchInput from "../Common/SearchBox";
import "./UserAccessForm.css";

function EditUserPermission() {
    const navigate =useNavigate();
    const location = useLocation();
    const userData = location.state?.userData; 
    const [labelNameList,setLabelNameList] = useState([])
    const [menuPermission, setMenuPermission] = useState([]);
    const [otherPermission, setOtherPermission] = useState([]);
    const [userPermission, setUserPermission] = useState({
        email: userData.userDetails.email,
        password: userData.userDetails.password,
    });
    const [selectedItems, setSelectedItems] = useState(otherPermission.map(() => []));


    useEffect(()=>{
        setMenuPermission(userData.menuPermission)
        setOtherPermission(userData.otherPermission)

    },[])
    const handleCheckboxChange = (e, category, index, subIndex = null) => {
        const { checked } = e.target;

        if (category === "menuPermission") {
            setMenuPermission((prev) => {
                const updated = [...prev];
                if (subIndex !== null) {
                    updated[index].submenu[subIndex].status = checked;
                } else {
                    updated[index].status = checked;
                }
                return updated;
            });
        } else if (category === "otherPermission") {
            setOtherPermission((prev) => {
                const updated = [...prev];
                updated[index].status = checked;
                return updated;
            });
        }
    };

    const handleSubmit = async () => {
        const payload = {
            "registeredUserId": userData.userDetails._id,
            menuPermission:menuPermission,
            otherPermission:otherPermission,
        }; 
        try {
            const result = await putData(base.updatePermission, payload);
            if (result?.status === true) {
                Swal.fire("Success", result.data.message, "success");
                navigate("/User Access")
            } else {

                Swal.fire("Error", result.message, "error");
            }
        } catch (error) {
            Swal.fire("Error", "An error occurred during submission", "error");
            console.error("Submission error:", error);
        }
    };

    // const handleSearchChange = (index, data) => {
    //     // Update selected item for a particular section
    //     const updatedItems = [...selectedItems];
    //     updatedItems[index] = data;
    //     setSelectedItems(updatedItems);
    // };
    // const fetchLabel = async () => {
    //     let result = await getData(base.labelList);
    //     setLabelNameList(result.data)
    //     console.log(base.labelList, "==============>", result)
    //   }
    return (
        <div>
            <Nav/>
            <div className="content-wrapper">
                <section className="content">
                    <div className="form-container">
                        <h2>User Access Management</h2>
                        <div className="form-section">
                            <label>Email:
                                <input
                                    type="email"
                                    value={userPermission.email}
                                    onChange={(e) => setUserPermission((prev) => ({ ...prev, email: e.target.value }))}
                                />
                            </label>
                            <label>Password:
                                <input
                                    type="password"
                                    value={userPermission.password}
                                    onChange={(e) => setUserPermission((prev) => ({ ...prev, password: e.target.value }))}
                                />
                            </label>
                        </div>
                        <div className="form-section">
                            <h3>Menu Permissions</h3>
                            {menuPermission.map((menu, index) => (
                                <div key={menu.mainMenuName}>
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={menu.status}
                                            onChange={(e) => handleCheckboxChange(e, "menuPermission", index)}
                                        />
                                        {menu.mainMenuName}
                                    </label>
                                    {menu.submenu.map((submenu, subIndex) => (
                                        <label key={submenu.subMenuName} style={{ marginLeft: "20px" }}>
                                            <input
                                                type="checkbox"
                                                checked={submenu.status}
                                                onChange={(e) => handleCheckboxChange(e, "menuPermission", index, subIndex)}
                                            />
                                            {submenu.subMenuName}
                                        </label>
                                    ))}
                                </div>
                            ))}
                        </div>
                        {/* Catalog Scope */}
                        <div className="form-section">
                            <h3>Catalog Scope</h3>
                            
                                {otherPermission.map((item, index) =>  
                                    (
                                        <label key={item.sectionName}>
                                            <input
                                                type="checkbox"
                                                checked={item.status}
                                                onChange={(e) => handleCheckboxChange(e, "otherPermission", index)}
                                            />
                                            {item.sectionName}
                                            {item.status && (
                                                <div className="form-group">
                                                    <label htmlFor="featuring">Search {item.sectionName}</label>
                                                    {/* <SearchInput
                                                        artistData={selectedItems[index]}
                                                        setSelectData={(data) => handleSearchChange(index, data)}
                                                    /> */}
                                                </div>
                                            )}
                                        </label>

                                    )
                                )} 

                        </div>

                        <button
                            onClick={() => [handleSubmit()]}
                            className="btn btn-primary btn-block btn-flat"
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default EditUserPermission;
