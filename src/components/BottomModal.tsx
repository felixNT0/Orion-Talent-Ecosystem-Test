import { useState, useEffect } from "react";
import { Text, Modal, StyleSheet, Animated, View } from "react-native";
import { BlurView } from "expo-blur";

const BottomModal = ({ visible, onClose, children }: any) => {
  const [modalVisible, setModalVisible] = useState(visible);
  const translateY = new Animated.Value(1);

  useEffect(() => {
    if (visible) {
      show();
    } else {
      hide();
    }
  }, [visible]);

  const show = () => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setModalVisible(true));
  };

  const hide = () => {
    Animated.timing(translateY, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setModalVisible(false));
  };

  return (
    <View style={styles.container}>
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={onClose}
      >
        <BlurView intensity={30} tint="dark" style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.header}>
              <Text onPress={onClose} style={styles.modalText}>
                Close
              </Text>
            </View>
            {children}
          </View>
        </BlurView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#D3D3D3",
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: "100%",
    height: "70%",
  },
  modalText: {
    fontWeight: "400",
    textAlign: "center",
    color: "black",
  },
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default BottomModal;
