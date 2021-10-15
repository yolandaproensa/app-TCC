import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    backgroundColor: "white",
    width: "90%",
    height: "75%",
    borderColor: "rgba(0,0,0,0.15)",
    borderWidth: 2,
    borderRadius: 32,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingVertical: 24,
  },
  formTitle: {
    fontSize: 48,
    fontWeight: "600",
  },
  formButton: {
    backgroundColor: "rgb(255,128,0)",
    borderRadius: 32,
    padding: 12,
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  formButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "800",
  },
  formTextInput: {
    padding: 12,
    paddingLeft: 48,
    borderBottomColor: "rgba(0,0,0,0.15)",
    borderBottomWidth: 1,
    width: "100%",
    fontSize: 18,
    fontWeight: "bold",
    color: "rgba(0,0,0,0.7)",
  },
  formTextInputIcon: {
    position: "absolute",
    left: 8,
    bottom: 12,
    color: "rgba(0,0,0,0.15)",
  },
});
