import React, { useEffect, useState } from "react";
import SideMenu from "./SideMenu";
import toast from "react-hot-toast";
import axios from "axios";
import { Modal, Form, Input, Upload, Button, Table } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "../admin/staffs.css";

const StaffsList = () => {
  const [userList, setUserList] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [editUser, setEditUser] = useState(null);
  const [deleteUserId, setDeleteUserId] = useState(null);
  const [dataSource, setDataSource] = useState([]);

  // Get all users list
  const getAllUsers = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_REACT_APP_URL}/api/v1/upload/allUser`
      );
      if (response?.data?.success) {
        setUserList(response.data.users);
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  useEffect(() => {
    setDataSource(userList.map((user) => ({ ...user, key: user._id })));
  }, [userList]);

  // Show modal for editing user
  const showModal = (user) => {
    setEditUser(user);
    form.setFieldsValue({
      name: user.name,
      position: user.position,
      image: user.image, // Set the image value in the form
    });
    setIsModalVisible(true);
  };

  // Handle modal ok button click
  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("position", values.position);
      // Only append image if a new image is uploaded
      if (values.image?.file) {
        formData.append("image", values.image.file.originFileObj);
      }
      const response = await axios.put(
        `${import.meta.env.VITE_REACT_APP_URL}/api/v1/upload/updateUser/${
          editUser._id
        }`,
        formData
      );
      if (response.data.success) {
        toast.success(response.data.message);
        setIsModalVisible(false);
        getAllUsers();
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Something went wrong while updating user");
      }
    }
  };

  // Handle modal cancel button click
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // Delete user
  const deleteHandler = async (id) => {
    setDeleteUserId(id); // Set the id of the user to be deleted
  };

  // Confirm delete user
  const confirmDeleteHandler = async () => {
    try {
      const response = await axios.delete(
        `${
          import.meta.env.VITE_REACT_APP_URL
        }/api/v1/upload/deleteUser/${deleteUserId}`
      );
      if (response.data.success) {
        toast.success(response.data.message);
        // After successful deletion, update the user list
        getAllUsers();
      }
      setDeleteUserId(null); // Reset the deleteUserId after successful deletion
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Something went wrong while deleting user");
      }
    }
  };

  // Cancel delete user
  const cancelDeleteHandler = () => {
    setDeleteUserId(null); // Reset the deleteUserId
  };

  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (image) => (
        <img src={image} alt="User" style={{ maxWidth: 50, maxHeight: 50 }} />
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Position",
      dataIndex: "position",
      key: "position",
    },
    
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <span>
          <Button onClick={() => showModal(record)}>Edit</Button>
          <Button onClick={() => deleteHandler(record._id)}>Delete</Button>
        </span>
      ),
    },
  ];

  return (
    <>
      <div className="staff_container container">
        <div className="sideMenuContainer">
          <div className="sidemenu">
            <SideMenu />
          </div>
          
          <div className="userlist_container">
          <h3>User list</h3>
            {dataSource.length > 0 ? (
              <Table
                columns={columns}
                dataSource={dataSource}
                pagination={true}
              />
            ) : (
              <p>No users</p>
            )}
          </div>
        </div>
      </div>
      <Modal
        title="Edit User"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical" initialValues={{}}>
          <Form.Item label="Name" name="name">
            <Input />
          </Form.Item>
          <Form.Item label="Position" name="position">
            <Input />
          </Form.Item>
          <Form.Item label="Image" name="image">
            <Upload
              name="image"
              maxCount={1}
              beforeUpload={() => false}
              accept=".jpg,.jpeg,.png"
            >
              <Button icon={<UploadOutlined />}>Upload Image</Button>
            </Upload>
          </Form.Item>
        </Form>
      </Modal>
      <Modal
        title="Confirm Delete"
        open={deleteUserId !== null}
        onOk={confirmDeleteHandler}
        onCancel={cancelDeleteHandler}
        okText="Yes"
        cancelText="No"
      >
        <p>
          Are you sure you want to delete this user? This action cannot be
          undone.
        </p>
      </Modal>
    </>
  );
};

export default StaffsList;
