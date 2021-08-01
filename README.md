# LoR Analyzer

This is a small utility, made as a command line tool, used to analyze _Legends of Runeterra_ data. 

**NOTE:** This project has almost no functionality for the moment. The idea is to provide a nice base on
which extra analysis can be added. 


## Current functionality

On first execution it will download and extract card data from RIOT's servers. The rest of the functionality
performs analysis on this data.

The application is exposed as a command line tool, and every sub-command corresponds to a different analysis.
To see the documentation of the tool, execute `npx ts-node src\index.ts -h`. For the moment these are the 
only *analysis* that it can perform:


### cards-with-keyword 

Shows how many cards of each region have the given keyword. 

Example:

```
$ ts-node src/index.ts cards-with-keyword overwhelm

Freljord: 19
Noxus: 13      
Targon: 9      
Shurima: 8     
Bilgewater: 5  
PiltoverZaun: 2
ShadowIsles: 2 
Demacia: 1     
Ionia: 0     
```