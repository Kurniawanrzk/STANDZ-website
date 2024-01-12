import 'package:flutter/material.dart';

class InputField extends StatelessWidget {
  final double widthSizedBox;
  final String labelText;
  final String hintText;
  final Icon? icon;
  final bool obscureText;
  final TextEditingController? controller;
  final String? Function(String?)? validator;
  final VoidCallback? onTap; // Add onTap parameter

  const InputField({
    Key? key,
    required this.widthSizedBox,
    required this.labelText,
    required this.hintText,
    this.icon,
    required this.obscureText,
    this.controller,
    this.validator,
    this.onTap, // Add onTap parameter
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: widthSizedBox,
      child: TextFormField(
        onTap: onTap, // Assign onTap to the TextFormField's onTap
        obscureText: obscureText,
        controller: controller,
        validator: validator,
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
