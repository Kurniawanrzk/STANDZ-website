import 'package:flutter/material.dart';
import 'package:standzclient/components/field_input/drop_down.dart';
import 'package:standzclient/components/field_input/input.dart';

class DesktopLogin extends StatelessWidget {
  const DesktopLogin({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return const Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
        DropDownField(widthSizedBox: 450, icon: Icon(Icons.person), items: ["As renter", "As landowner"]),
        SizedBox(height: 20),
        InputField(
          widthSizedBox: 450, 
          labelText: 'Email', 
          hintText:'Place your email', 
          icon: Icon(Icons.email_outlined),
          obscureText: true,
          ),
        SizedBox(height: 20),
        InputField(
          widthSizedBox: 450, 
          labelText: 'Password', 
          hintText:'Place your password' , 
          icon: Icon(Icons.password),
          obscureText: true,
          ),
        SizedBox(height: 20),
        SizedBox(
          child: ElevatedButton(
            onPressed: null,
            child: Text("Login"),
            // style: ButtonStyle(
            //   backgroundColor: MaterialStateProperty.all<Color>(Colors.blue),
            // ),
          ),
        )
            ],
          );
  }
}