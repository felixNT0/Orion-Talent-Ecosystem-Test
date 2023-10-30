import { View, Text, Modal, TouchableOpacity, StyleSheet } from "react-native";
import { BlurView } from "expo-blur";

const CenteredModal = ({ visible, onClose, children }: any) => {
  return (
    <View style={styles.container}>
      <Modal
        transparent={true}
        animationType="slide"
        visible={visible}
        onRequestClose={onClose}
      >
        <BlurView
          intensity={30}
          tint="dark"
          style={styles.centeredModalContainer}
        >
          <View style={styles.centeredModalContent}>
            <Text style={{ color: "black", marginBottom: 20, fontSize: 17 }}>
              Choose feed category
            </Text>
            {children}
            <TouchableOpacity
              style={{
                width: "70%",
                backgroundColor: "#41BCC4",
                paddingHorizontal: 10,
                paddingVertical: 12,
                borderRadius: 12,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={onClose}
            >
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
        </BlurView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  centeredModalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  centeredModalContent: {
    backgroundColor: "#D3D3D3",
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
    width: "90%",
    height: "20%",
  },
});

export default CenteredModal;
