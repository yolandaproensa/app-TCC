import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  content: {
    flex: 1,
  },
  controls: {
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
    flexDirection: "row",
    width: "90%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  title: {
    color: "white",
  },
  formTitle: {
    fontSize: 48,
    fontWeight: "700",
    textAlign: "center",
    paddingTop: 24,
  },
  menu: {
    flexDirection: "row",
    paddingTop: 45,
    paddingBottom: 10,
    paddingLeft: 16,
    width: "100%",
    backgroundColor: "rgb(255,128,0)",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  button1: {
    backgroundColor: "white",
    position: "absolute",
    top: "45%",
    left: 16,
  },
  button1Text: {
    color: "#585858",
    fontSize: 22,
    textDecorationLine: "underline",
  },
  button2: {
    backgroundColor: "#58FA58",
    borderWidth: 3,
    borderColor: "#585858",
    width: 62,
    height: 62,
    margin: 25,
    borderRadius: 100,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  letterContainer: {
    width: "100%",
    height: "75%",

    flexDirection: "column",

    alignItems: "center",
    justifyContent: "center",

    padding: 20,
  },
  letter: {
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#585858",
    flex: 1,
    width: "80%",
    margin: 24,
    padding: 130,
    alignItems: "center",
    justifyContent: "center",
    top: 15,
  },
  person: {
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#585858",
    flex: 1,
    width: "80%",
    margin: 24,
    padding: 130,
    alignItems: "center",
    justifyContent: "center",
  },
  letterImage: {
    width: "75%",
    height: "100%",
  },
  personImage: {
    width: "50%",
    height: "100%",
  },
});
