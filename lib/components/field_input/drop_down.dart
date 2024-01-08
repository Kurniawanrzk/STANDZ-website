import 'package:flutter/material.dart';
import 'package:standzclient/components/drop_down_menu.dart';

class DropDownField extends StatelessWidget {
    final double widthSizedBox;
    final Icon icon;
    final List<String> items;
    const DropDownField(
      {Key? key,
      required this.widthSizedBox,  
      required this.icon,
      required this.items
      }) : super(key: key);


  @override
  Widget build(BuildContext context) {
    return SizedBox(
          width: widthSizedBox,
          child: Row(
            children: [
              SizedBox(
                child: icon,
              ),
              const SizedBox(width: 15),
              DropdownMenuExample(items: items)
            ],
          ),
        );
  }
}