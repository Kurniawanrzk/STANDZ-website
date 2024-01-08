import 'package:flutter/material.dart';
import 'package:standzclient/components/desktop/login.dart';
import 'package:standzclient/components/mobile/login.dart';
import 'package:standzclient/responsive.dart';



const List<String> list = <String>["Renter", "LandOwner"];


class LoginPage extends StatefulWidget {
  final String title;
  const LoginPage({Key? key, required this.title}) : super(key: key);
  @override
  _LoginPageState createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "Login page",
      theme: ThemeData(
        primarySwatch: Colors.teal,
        visualDensity: VisualDensity.adaptivePlatformDensity
      ),
      home: Scaffold(
          appBar: AppBar(
            title: Text("Login page"),
            backgroundColor: Color.fromARGB(255, 45, 112, 212),
          ),
          body: const Center(
            child:SingleChildScrollView(
            child: Responsive(
              mobile: MobileLogin(), 
              desktop: DesktopLogin() 
              )
            )
          )
        )
      );
  }
}