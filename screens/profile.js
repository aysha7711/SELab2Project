import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, TextInput } from 'react-native';

const ProfileScreen = ({route,navigation}) => {
  // Dummy user data (replace with your actual user data)
  const [user, setUser] = useState({
    id: '123456',
    name: 'John Doe',
    email: 'john.doe@example.com',
    // Add more user details as needed
  });
  const {loginInfo}=route.params;
  const [isEditing, setEditing] = useState(false);
  const [editedName, setEditedName] = useState(user.name);
  const [editedEmail, setEditedEmail] = useState(user.email);

  const getInitials = (name) => {
    if (name) {
      const nameArray = name.split(' ');
      return nameArray.map((word) => (word ? word[0].toUpperCase() : '')).join('');
    } else {
      return '';
    }
  };
  
  

  const handleSaveChanges = () => {
    // Update user data with edited values
    setUser({
      ...user,
      name: editedName,
      email: editedEmail,
    });

    // Exit editing mode
    setEditing(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        {/* Display user initials or profile picture */}
        <View style={styles.avatarContainer}>
          <Text style={styles.avatarText}>{getInitials(loginInfo.name)}</Text>
        </View>

        {/* Display user information */}
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{loginInfo.name}</Text>
          <Text style={styles.userId}>{`ID: ${loginInfo._id}`}</Text>
          <Text style={styles.userEmail}>{loginInfo.email}</Text>
          {/* Add more user details here */}
        </View>
      </View>

      {/* Update button */}
      {!isEditing && (
        <TouchableOpacity style={styles.editButton} onPress={() => setEditing(true)}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      )}

      {/* Modal for editing */}
      <Modal visible={isEditing} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {/* Name input */}
            <Text style={styles.modalLabel}>Name:</Text>
            <TextInput
              style={styles.modalInput}
              value={editedName}
              onChangeText={(text) => setEditedName(text)}
            />

            {/* Email input */}
            <Text style={styles.modalLabel}>Email:</Text>
            <TextInput
              style={styles.modalInput}
              value={editedEmail}
              onChangeText={(text) => setEditedEmail(text)}
            />

            {/* Save changes button */}
            <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
              <Text style={styles.saveButtonText}>Save Changes</Text>
            </TouchableOpacity>

            {/* Cancel button */}
            <TouchableOpacity style={styles.cancelButton} onPress={() => setEditing(false)}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff',
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  avatarText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  userId: {
    fontSize: 16,
    color: '#555',
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 16,
    color: '#555',
  },
  editButton: {
    backgroundColor: '#3498db',
    borderRadius: 8,
    padding: 16,
    marginTop: 16,
  },
  editButtonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#ffffff',
    margin: 16,
    padding: 16,
    borderRadius: 8,
  },
  modalLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  modalInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 12,
    paddingLeft: 8,
  },
  saveButton: {
    backgroundColor: '#3498db',
    borderRadius: 8,
    padding: 12,
    marginTop: 16,
  },
  saveButtonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: '#e74c3c',
    borderRadius: 8,
    padding: 12,
    marginTop: 8,
  },
  cancelButtonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
