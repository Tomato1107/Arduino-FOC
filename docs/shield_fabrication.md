---
layout: default
title: Board Fabrication
description: "Arduino Simple Field Oriented Control (FOC) library ."
parent: Arduino <span class="simple">Simple<span class="foc">FOC</span>Shield</span>
nav_order: 1
permalink: /arduino_simplefoc_shield_fabrication
---

# Arduino <span class="simple">Simple<span class="foc">FOC</span>Shield</span>  fabrication 
Here is a quick guide how to fabricate the <span class="simple">Simple<span class="foc">FOC</span>Shield</span> version V1.3. 


<p><img src="extras/Images/shield_top_v13.png" style="height:300px"><img src="extras/Images/shield_v13.png" style="height:300px"></p>

## Fabrication files and schematics
Download the files by clicking on links:
 - <b><a class="docs_link" href="extras/fabrication/schematic.pdf"  download="simple_foc_shield_schematic">Schematics</a></b> - PDF file
- <b><a class="docs_link" href="extras/fabrication/Gerber.zip"  download="simple_foc_shield_fabrication">Gerber</a></b> - Gerber, NC Drill & Assembly files
- <b><a class="docs_link" href="extras/fabrication/BOM.xlsx"  download="simple_foc_shield_BOM">Bill Of Materials (BOM)</a></b> - Excel sheet
- <b><a class="docs_link" href="extras/fabrication/3d_model.zip" download="simple_foc_shield_3Dmodel">3D model</a></b> -  3D PDF & STEP file

The board was designed in Altium Designer 2019, please contact me directly if you are interested in the project files: [contact](https://askuric.github.io/conctact).

## Fabrication procedure and cost
The price of the fabrication will highly depend of the number of boards and the companies you decide to use both as PCB manufacturers and the component suppliers. Here are two nice articles explaining how to approach the problem choosing the PCB manufacturer form [electronics-notes.com](https://www.electronics-notes.com/articles/constructional_techniques/printed-circuit-board-pcb/how-to-choose-right-best-pcb-manufacturer.php) and component supplier from [pcbonline.com](https://www.pcbonline.com/blog/How_to_Choose_a_PCB_Component_Supplier_165.html). 
But in most of cases it will always boil down to the price :)
### PCB fabrication
Download the [gerber files](extras/fabrication/Gerber.zip) and provide them to your PCB manufacturer of choice. In my case I used [seeedstrudio.com](https://www.seeedstudio.com/). The price of 10 PCBs is around 5\$ but the shipping was around 20\$. 
### Component purchase
Download the [Bill of Materials](extras/fabrication/BOM.xlsx) and find all the components with the required manufacturers number on your supplier website of choice. In my case I have used [Mouser](https://www.mouser.com/). The price of the components was around 10\$ per board and the shipping was again around 20\$ (for orders under 50\$).    

> NOTE: The components with the manufacturers numbers I have chosen are not really set in stone, feel free to optimize them both in terms of prices and values if necessary.

### Complete PCB fabrication and assembly
Download the [gerber files](extras/fabrication/Gerber.zip) and [Bill of Materials](extras/fabrication/BOM.xlsx) and supply it to your manufacturer of choice. The gerber files include assembly and Pick and Place files already. 
This technique is more suitable for larger quantities, the price for 100 pcs is around 1000$ on [seeedstrudio.com](https://www.seeedstudio.com/) if the PCBA Fusion option is chosen.


## Fully assembled versions
Order your own fully tested and assembled Arduino <span class="simple">Simple<span class="foc">FOC</span>Shield</span>  from our [shop](https://askuric.github.io/simplefoc_shield_product).

