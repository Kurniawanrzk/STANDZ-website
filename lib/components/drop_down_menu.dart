import 'package:flutter/material.dart';

class DropdownMenuExample extends StatefulWidget {
  final List<String> items; // Tambahkan properti untuk menyimpan daftar

  const DropdownMenuExample({Key? key, required this.items}) : super(key: key);

  @override
  State<DropdownMenuExample> createState() => _DropdownMenuExampleState();
}

class _DropdownMenuExampleState extends State<DropdownMenuExample> {
  String dropdownValue = '';

  @override
  void initState() {
    super.initState();
    // Tetapkan nilai dropdownValue ke item pertama ketika widget dibuat
    dropdownValue = widget.items.first;
  }

  @override
  Widget build(BuildContext context) {
    return DropdownMenu<String>(
      initialSelection: widget.items.first,
      width:410,
      onSelected: (String? value) {
        // Panggil callback onSelected dan tetapkan nilai dropdownValue
        setState(() {
          dropdownValue = value!;
        });
      },
      dropdownMenuEntries: widget.items.map<DropdownMenuEntry<String>>((String value) {
        return DropdownMenuEntry<String>(value: value, label: value);
      }).toList(),
    );
  }
}
