import 'package:flutter/material.dart';

class InputField extends StatelessWidget {
    final double widthSizedBox;
    final String labelText;
    final String hintText;
    final Icon icon;
    final bool obscureText;
    const InputField(
      {Key? key,required this.widthSizedBox, 
      required this.labelText, 
      required this.hintText, 
      required this.icon,
      required this.obscureText
      }) : super(key: key);
    @override


    Widget build(BuildContext context) {
        return  SizedBox(
                width: widthSizedBox,
                child: TextField(
                  obscureText: obscureText,
                  decoration: InputDecoration(
                    border: OutlineInputBorder(),
                    labelText: labelText,
                    hintText: hintText,
                    icon: icon,
                  ),
                ),
              );
    }

}