import 'package:flutter/material.dart';
import 'package:standzclient/components/field_input/input.dart'; // Import the InputField widget
import 'package:http/http.dart' as http;
class MobileLogin extends StatefulWidget {
  const MobileLogin({Key? key}) : super(key: key);

  @override
  _MobileLoginState createState() => _MobileLoginState();
}

class _MobileLoginState extends State<MobileLogin> {
  TextEditingController _emailController = TextEditingController();
  TextEditingController _passwordController = TextEditingController(); // Add controller for the password field
  final _formKey = GlobalKey<FormState>();
  bool iptStatus = false;

  @override
  void initState() {
    super.initState();
  }

  @override
  void dispose() {
    _emailController.dispose();
    _passwordController.dispose();
    super.dispose();
  }
  @override
  Widget build(BuildContext context) {
    return Form(
        key:_formKey,
        child: Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        // DropDownField(widthSizedBox: 450, icon: Icon(Icons.person), items: ["As renter", "As landowner"]),
        // SizedBox(height: 20),
        InputField(
          widthSizedBox: 450,
          labelText: 'Email',
          hintText: 'Place your email',
          icon: Icon(Icons.email_outlined),
          obscureText: false,
          validator: (value) => value?.isEmpty ?? true ? 'please add the value' : null,
          controller: _emailController,
        ),
        SizedBox(height: 20),
        InputField(
          widthSizedBox: 450,
          labelText: 'Password',
          hintText: 'Place your password',
          icon: Icon(Icons.password),
          obscureText: true,
          validator: (value) => value?.isEmpty ?? true ? 'please add the value' : null,
          controller: _passwordController, // Pass the controller for the password field
        ),

        SizedBox(height: 20),
        SizedBox(
          width: 200,
          child: ElevatedButton(
            onPressed: () {
              if(_formKey.currentState?.validate() ?? true) {
                print("Oke");
              }
            },
            child: Text("Login"),
            // style: ButtonStyle(
            //   backgroundColor: MaterialStateProperty.all<Color>(Colors.blue),
            // ),
          ),
        ),
      ],
    ),
      );
  }
}
