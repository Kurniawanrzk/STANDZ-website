import 'package:flutter/material.dart';
import 'package:standzclient/view/login.dart';

void main() => runApp(MainApp());

class MainApp extends StatelessWidget {
  final String title = '';
  const MainApp({Key? key}):super(key: key);
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: title,
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const LoginPage(title: "Login Page"),
      routes: <String, WidgetBuilder>{
        '/login' : (BuildContext context) => LoginPage(title:title)
      },
    );
  }
}
