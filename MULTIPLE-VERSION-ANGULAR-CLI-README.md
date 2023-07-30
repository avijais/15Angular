## How to use multiple angular cli version on single system while global angular cli version is different

## To install separate local angular cli version
1.  Create one directory<br>
2.  Inside that created directory, Run the command `npm i @angular/cli@15.2.*`<br>
3.  Step number 3 will create `node_module` in current path and will install angular cli 15.2.* inside this node_module directory<br>
4.  Now a separate angular cli installed, from global Angular CLI, we can check via run the command `ng version` at this current path. 

## Create angular porject now without node_module
1.  Run the command `npx ng new angular15WithMaterialNTailwindCss --skip-install`<br>
2.  Now install angular project dependancy, Go inside project directory<br>
3.  Run the command npm install<br>
4.  Check ng version now<br>
5.  It should show the angular version on which this project is created<br>
6.  Now you can delete node_module folder which is present out side from the project and used to install angular cli for this project<br>