/*
$('.toast').toast({delay: 3000})
Milestones, Filters, Parent/Child Filters, Admins
*/
/*
code to determine which bar charts are needed an their order
code to build a bar chart
code to handle clicks (what about hovers? can be done via css alone across legend and bar?)
*/
//TO UPDATE/ADD
$(function () {
  $('[data-toggle="popover"]').popover()
})
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
/*
$("#totaldesigns").html("36")

$("#legendVerticalVMC").html(82)
$("#barVerticalVMC").html("60%")
$("#barVerticalVMC").attr("style", "width: 59.9%")
*/
/*
$(function () {
    $('#bar1').highcharts({
        chart: {
            type: 'bar',
            margin: [5,-10,35,0]
        },
            credits: {
                enabled: false
            },
            navigation: {
                buttonOptions: {
                    enabled: false
                }
            },
        title: {
            text: ''
        },
        xAxis: {
                categories: [''],
                gridLineWidth: 0,
                lineWidth: 0,
                tickWidth: 0,
                minPadding:0,
        				maxPadding:0
        },
        yAxis: {
            min: 0,
                gridLineWidth: 0,
                lineWidth: 0,
                minPadding:0,
        				maxPadding:0,
                title: {
                    text: ''
                },
                labels: {
                    enabled: false//default is true
                }
        },
        legend: {
            reversed: true,
            align: 'left',
            x: -20
        },
        
        plotOptions: {
            series: {
                stacking: 'normal',
                borderWidth: 0,
                allowPointSelect: true
            },
            bar: {
                dataLabels: {
                    enabled: false,
                    distance : -0,
                    formatter: function() {
                        var dlabel = this.series.name + '<br/>';
                        dlabel += Math.round(this.percentage*100)/100 + ' %';
                            return dlabel
                    },
                    style: {
                        color: 'white',
                    },
                },
                
            },
        },
        series: [{
            name: 'Phase 2',
            data: [15],
            borderRadiusTopLeft: '4px',
            borderRadiusTopRight:'4px'
        }, {
            name: 'Phase 1',
            data: [15]
        }, {
            name: 'TEP',
            data: [7],
            borderRadiusBottomLeft: '4px',
            borderRadiusBottomRight:'4px'
        } ]
    });
});
*/

/*
let designs = [
  {
    FAE: "",
    GEO: "PRC",
    SKU: "",
    ProjectName: "",
    BU: "RBHE",
    Application: "Transactional",
    Program: "EHL",
    KickOff: "7/20/2019",
    Schematic: "",
    Layout: "",
    PowerOn: "",
    Launch: "",
    CheckIn: "",
    CurrentSatus: "KO"
  },
  {
    FAE: "",
    GEO: "APJ",
    SKU: "",
    ProjectName: "",
    BU: "VMC",
    Application: "eODM",
    Program: "WHL",
    KickOff: "10/15/2018",
    Schematic: "1/15/2019",
    Layout: "4/22/2019",
    PowerOn: "5/10/2019",
    Launch: "",
    CheckIn: "",
    CurrentSatus: "PO"
  },
  {
    FAE: "",
    GEO: "ASMO",
    SKU: "",
    ProjectName: "",
    BU: "VMC",
    Application: "eODM",
    Program: "EHL",
    KickOff: "1/15/2019",
    Schematic: "",
    Layout: "",
    PowerOn: "",
    Launch: "",
    CheckIn: "",
    CurrentSatus: "KO"
  },
  {
    FAE: "",
    GEO: "PRC",
    SKU: "",
    ProjectName: "",
    BU: "VMC",
    Application: "Video",
    Program: "WHL",
    KickOff: "10/15/2018",
    Schematic: "5/6/2019",
    Layout: "",
    PowerOn: "",
    Launch: "",
    CheckIn: "",
    CurrentSatus: "Schematic"
  },
  {
    FAE: "",
    GEO: "PRC",
    SKU: "",
    ProjectName: "",
    BU: "VMC",
    Application: "Video",
    Program: "WHL",
    KickOff: "Cancel",
    Schematic: "",
    Layout: "",
    PowerOn: "",
    Launch: "",
    CheckIn: "",
    CurrentSatus: "Cancel"
  }
];
*/
designs = [
  {
    FAE: "",
    GEO: "PRC",
    SKU: "",
    ProjectName: "Bahringer",
    DesignName: "SGDC PC nextGen Corei55W",
    Vertical: "ISD",
    Application: "Industrial",
    Program: "WHL",
    KickOff: "10/15/2021",
    Schematic: "2/27/2021",
    Layout: "4/27/2019",
    PowerOn: "5/1/2019",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 3,
    CurrentStatus: "PowerOn",
    OnTrack: true,
    Flag: "FYI",
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "PRC",
    SKU: "",
    ProjectName: "Mayer",
    DesignName: "iBX2300",
    Vertical: "RBHE",
    Application: "Visual",
    Program: "WHL",
    KickOff: "10/15/2021",
    Schematic: "11/8/2018",
    Layout: "11/29/2018",
    PowerOn: "12/17/2018",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 1,
    CurrentStatus: "PowerOn",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "APJ",
    SKU: "",
    ProjectName: "Nienow",
    DesignName: "",
    Vertical: "VMC",
    Application: "eODM",
    Program: "WHL",
    KickOff: "10/12/2021",
    Schematic: "12/12/2018",
    Layout: "5/3/2019",
    PowerOn: "6/3/2019",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "PowerOn",
    OnTrack: true,
    Flag: false,
    AccountType: "OEM",
  },
  {
    FAE: "",
    GEO: "APJ",
    SKU: "H",
    ProjectName: "Gerlach",
    DesignName: "",
    Vertical: "VMC",
    Application: "eODM",
    Program: "CFLR",
    KickOff: "3/21/2019",
    Schematic: "4/30/2019",
    Layout: "5/30/2019",
    PowerOn: "6/30/2019",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "PowerOn",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "EMEA",
    SKU: "H",
    ProjectName: "Mayer",
    DesignName: "",
    Vertical: "VMC",
    Application: "Public-Sector",
    Program: "CFLR",
    KickOff: "2/1/2019",
    Schematic: "4/30/2019",
    Layout: "5/30/2019",
    PowerOn: "6/30/2019",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "PowerOn",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "ASMO",
    SKU: "H",
    ProjectName: "Botsford",
    DesignName: "",
    Vertical: "VMC",
    Application: "Public-Sector",
    Program: "CFLR",
    KickOff: "3/1/2019",
    Schematic: "5/10/2019",
    Layout: "6/10/2019",
    PowerOn: "7/10/2019",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 1,
    CurrentStatus: "PowerOn",
    OnTrack: true,
    Flag: "Question",
    AccountType: "OEM",
  },
  {
    FAE: "",
    GEO: "EMEA",
    SKU: "",
    ProjectName: "Kuhn-Boehm",
    DesignName: "",
    Vertical: "ISD",
    Application: "Industrial",
    Program: "EHL",
    KickOff: "1/15/2022",
    Schematic: "",
    Layout: "",
    PowerOn: "",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 1,
    CurrentStatus: "KickOff",
    OnTrack: true,
    Flag: "Help Needed!",
    AccountType: "ISV",
  },
  {
    FAE: "",
    GEO: "APJ",
    SKU: "",
    ProjectName: "Kuvalis",
    DesignName: "",
    Vertical: "ISD",
    Application: "Industrial",
    Program: "EHL",
    KickOff: "7/9/2022",
    Schematic: "",
    Layout: "",
    PowerOn: "",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "KickOff",
    OnTrack: true,
    Flag: false,
    AccountType: "ISV",
  },
  {
    FAE: "",
    GEO: "APJ",
    SKU: "",
    ProjectName: "Lueilwitz",
    DesignName: "",
    Vertical: "VMC",
    Application: "eODM",
    Program: "WHL",
    KickOff: "10/11/2018",
    Schematic: "1/1/2019",
    Layout: "1/11/2019",
    PowerOn: "4/15/2019",
    Launch: "6/30/2019",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "Launch",
    OnTrack: true,
    Flag: false,
    AccountType: "OEM",
  },
  {
    FAE: "",
    GEO: "APJ",
    SKU: "H",
    ProjectName: "Roob",
    DesignName: "",
    Vertical: "VMC",
    Application: "eODM",
    Program: "CFLR",
    KickOff: "1/20/2019",
    Schematic: "1/29/2019",
    Layout: "2/7/2019",
    PowerOn: "3/29/2019",
    Launch: "6/30/2019",
    CheckIn: "",
    ActiveIPS: 1,
    CurrentStatus: "Launch",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "APJ",
    SKU: "S",
    ProjectName: "Barton",
    DesignName: "",
    Vertical: "VMC",
    Application: "eODM",
    Program: "CFLR",
    KickOff: "1/19/2019",
    Schematic: "2/19/2019",
    Layout: "3/5/2019",
    PowerOn: "4/20/2019",
    Launch: "6/30/2019",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "Launch",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "EMEA",
    SKU: "",
    ProjectName: "Mayer",
    DesignName: "",
    Vertical: "VMC",
    Application: "eODM",
    Program: "WHL",
    KickOff: "10/18/2018",
    Schematic: "7/11/2019",
    Layout: "",
    PowerOn: "",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 8,
    CurrentStatus: "Schematic",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "APJ",
    SKU: "",
    ProjectName: "Brakus",
    DesignName: "",
    Vertical: "VMC",
    Application: "eODM",
    Program: "WHL",
    KickOff: "10/11/2018",
    Schematic: "11/4/2018",
    Layout: "12/5/2018",
    PowerOn: "4/12/2019",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "PowerOn",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "APJ",
    SKU: "",
    ProjectName: "Parisian",
    DesignName: "",
    Vertical: "ISD",
    Application: "Industrial",
    Program: "EHL",
    KickOff: "",
    Schematic: "",
    Layout: "",
    PowerOn: "",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 2,
    CurrentStatus: "Waiting",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "APJ",
    SKU: "",
    ProjectName: "Parisian",
    DesignName: "",
    Vertical: "VMC",
    Application: "eODM",
    Program: "CFLR",
    KickOff: "",
    Schematic: "",
    Layout: "",
    PowerOn: "",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "Waiting",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "APJ",
    SKU: "",
    ProjectName: "Weber",
    DesignName: "",
    Vertical: "VMC",
    Application: "eODM",
    Program: "WHL",
    KickOff: "10/12/2022",
    Schematic: "",
    Layout: "",
    PowerOn: "",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "KickOff",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "APJ",
    SKU: "H",
    ProjectName: "Reichert",
    DesignName: "",
    Vertical: "VMC",
    Application: "eODM",
    Program: "CFLR",
    KickOff: "3/15/2019",
    Schematic: "2/21/2019",
    Layout: "3/20/2019",
    PowerOn: "4/26/2019",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 1,
    CurrentStatus: "PowerOn",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "APJ",
    SKU: "",
    ProjectName: "Barton",
    DesignName: "",
    Vertical: "VMC",
    Application: "eODM",
    Program: "WHL",
    KickOff: "10/12/2018",
    Schematic: "4/30/2019",
    Layout: "5/30/2019",
    PowerOn: "6/30/2019",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 1,
    CurrentStatus: "PowerOn",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "PRC",
    SKU: "",
    ProjectName: "Larkin Ferry",
    DesignName: "",
    Vertical: "VMC",
    Application: "eODM",
    Program: "WHL",
    KickOff: "10/15/2018",
    Schematic: "10/31/2018",
    Layout: "11/16/2018",
    PowerOn: "12/7/2018",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "PowerOn",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "APJ",
    SKU: "H",
    ProjectName: "Schaden & Sons",
    DesignName: "",
    Vertical: "VMC",
    Application: "eODM",
    Program: "CFLR",
    KickOff: "Canceled",
    Schematic: "",
    Layout: "",
    PowerOn: "",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 10,
    CurrentStatus: "Canceled",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "APJ",
    SKU: "S",
    ProjectName: "ConnTech",
    DesignName: "",
    Vertical: "VMC",
    Application: "eODM",
    Program: "CFLR",
    KickOff: "3/29/2019",
    Schematic: "4/8/2019",
    Layout: "5/8/2019",
    PowerOn: "6/1/2019",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "PowerOn",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "APJ",
    SKU: "",
    ProjectName: "Bradtke",
    DesignName: "",
    Vertical: "VMC",
    Application: "eODM",
    Program: "WHL",
    KickOff: "10/12/2018",
    Schematic: "01/01/1900",
    Layout: "3/14/2019",
    PowerOn: "6/30/2019",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "PowerOn",
    OnTrack: true,
    Flag: false,
    AccountType: "ISV",
  },
  {
    FAE: "",
    GEO: "APJ",
    SKU: "",
    ProjectName: "Walker",
    DesignName: "",
    Vertical: "RBHE",
    Application: "Visual",
    Program: "WHL",
    KickOff: "10/12/2018",
    Schematic: "12/28/2018",
    Layout: "1/18/2019",
    PowerOn: "6/15/2019",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 1,
    CurrentStatus: "PowerOn",
    OnTrack: true,
    Flag: false,
    AccountType: "ISV",
  },
  {
    FAE: "",
    GEO: "APJ",
    SKU: "S",
    ProjectName: "Bradtke",
    DesignName: "",
    Vertical: "VMC",
    Application: "eODM",
    Program: "CFLR",
    KickOff: "3/21/2019",
    Schematic: "4/30/2019",
    Layout: "5/30/2019",
    PowerOn: "6/30/2019",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 1,
    CurrentStatus: "PowerOn",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "EMEA",
    SKU: "H",
    ProjectName: "O'Kon",
    DesignName: "",
    Vertical: "VMC",
    Application: "eODM",
    Program: "CFLR",
    KickOff: "Canceled",
    Schematic: "",
    Layout: "",
    PowerOn: "",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 1,
    CurrentStatus: "Canceled",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "ASMO",
    SKU: "",
    ProjectName: "Hudson",
    DesignName: "",
    Vertical: "VMC",
    Application: "eODM",
    Program: "WHL",
    KickOff: "9/27/2018",
    Schematic: "",
    Layout: "",
    PowerOn: "",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "KickOff",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "EMEA",
    SKU: "S",
    ProjectName: "Ratke Group",
    DesignName: "",
    Vertical: "ISD",
    Application: "Industrial",
    Program: "CFLR",
    KickOff: "2/1/2019",
    Schematic: "4/30/2019",
    Layout: "5/30/2019",
    PowerOn: "",
    Launch: "",
    CheckIn: "3/13/2019 12:00:00 AM",
    ActiveIPS: 1,
    CurrentStatus: "Layout",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "EMEA",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "ISD",
    Application: "Industrial",
    Program: "EHL",
    KickOff: "1/15/2019",
    Schematic: "",
    Layout: "",
    PowerOn: "",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 1,
    CurrentStatus: "KickOff",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "EMEA",
    SKU: "H",
    ProjectName: "Jesting",
    DesignName: "",
    Vertical: "ISD",
    Application: "Industrial",
    Program: "CFLR",
    KickOff: "2/1/2019",
    Schematic: "4/30/2019",
    Layout: "5/30/2019",
    PowerOn: "6/30/2019",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 3,
    CurrentStatus: "PowerOn",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "EMEA",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "VMC",
    Application: "eODM",
    Program: "WHL",
    KickOff: "10/19/2018",
    Schematic: "4/30/2019",
    Layout: "5/30/2019",
    PowerOn: "6/30/2019",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 1,
    CurrentStatus: "PowerOn",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "PRC",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "RBHE",
    Application: "Visual",
    Program: "WHL",
    KickOff: "9/27/2018",
    Schematic: "12/26/2018",
    Layout: "1/17/2019",
    PowerOn: "",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 1,
    CurrentStatus: "Layout",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "PRC",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "ISD",
    Application: "Industrial",
    Program: "WHL",
    KickOff: "10/15/2018",
    Schematic: "2/24/2019",
    Layout: "11/9/2018",
    PowerOn: "",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 1,
    CurrentStatus: "Layout",
    OnTrack: true,
    Flag: false,
    AccountType: "ISV",
  },
  {
    FAE: "",
    GEO: "PRC",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "ISD",
    Application: "Energy",
    Program: "WHL",
    KickOff: "10/15/2018",
    Schematic: "12/14/2018",
    Layout: "5/23/2019",
    PowerOn: "",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 1,
    CurrentStatus: "Layout",
    OnTrack: true,
    Flag: false,
    AccountType: "OSV",
  },
  {
    FAE: "",
    GEO: "APJ",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "VMC",
    Application: "eODM",
    Program: "WHL",
    KickOff: "3/1/2019",
    Schematic: "3/15/2019",
    Layout: "4/1/2019",
    PowerOn: "4/10/2019",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 1,
    CurrentStatus: "PowerOn",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "PRC",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "RBHE",
    Application: "Transactional",
    Program: "EHL",
    KickOff: "",
    Schematic: "",
    Layout: "",
    PowerOn: "",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 1,
    CurrentStatus: "Waiting",
    OnTrack: true,
    Flag: false,
    AccountType: "ISV",
  },
  {
    FAE: "",
    GEO: "APJ",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "VMC",
    Application: "eODM",
    Program: "WHL",
    KickOff: "10/12/2018",
    Schematic: "",
    Layout: "",
    PowerOn: "",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 1,
    CurrentStatus: "KickOff",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "APJ",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "RBHE",
    Application: "Transactional",
    Program: "EHL",
    KickOff: "",
    Schematic: "",
    Layout: "",
    PowerOn: "",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 1,
    CurrentStatus: "Waiting",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "APJ",
    SKU: "H",
    ProjectName: "Optionals",
    DesignName: "",
    Vertical: "VMC",
    Application: "eODM",
    Program: "CFLR",
    KickOff: "",
    Schematic: "",
    Layout: "",
    PowerOn: "",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "Waiting",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "EMEA",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "RBHE",
    Application: "Transactional",
    Program: "WHL",
    KickOff: "Canceled",
    Schematic: "",
    Layout: "",
    PowerOn: "",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "Canceled",
    OnTrack: true,
    Flag: false,
    AccountType: "OSV",
  },
  {
    FAE: "",
    GEO: "EMEA",
    SKU: "H",
    ProjectName: "Microstat",
    DesignName: "",
    Vertical: "RBHE",
    Application: "Visual",
    Program: "CFLR",
    KickOff: "3/5/2019",
    Schematic: "7/27/2019",
    Layout: "",
    PowerOn: "",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 1,
    CurrentStatus: "Schematic",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "EMEA",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "ISD",
    Application: "Industrial",
    Program: "EHL",
    KickOff: "1/15/2019",
    Schematic: "5/29/2019",
    Layout: "",
    PowerOn: "",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "Schematic",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "EMEA",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "VMC",
    Application: "eODM",
    Program: "WHL",
    KickOff: "9/29/2018",
    Schematic: "11/5/2018",
    Layout: "11/20/2018",
    PowerOn: "12/17/2018",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "PowerOn",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "PRC",
    SKU: "S",
    ProjectName: "uTech",
    DesignName: "",
    Vertical: "VMC",
    Application: "Video",
    Program: "CFLR",
    KickOff: "6/6/2019",
    Schematic: "4/30/2019",
    Layout: "5/30/2019",
    PowerOn: "6/30/2019",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "PowerOn",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "PRC",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "VMC",
    Application: "Video",
    Program: "EHL",
    KickOff: "",
    Schematic: "",
    Layout: "",
    PowerOn: "",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 1,
    CurrentStatus: "Waiting",
    OnTrack: false,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "PRC",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "RBHE",
    Application: "Visual",
    Program: "EHL",
    KickOff: "",
    Schematic: "",
    Layout: "",
    PowerOn: "",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 1,
    CurrentStatus: "Waiting",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "PRC",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "VMC",
    Application: "Office-Automation",
    Program: "WHL",
    KickOff: "10/15/2018",
    Schematic: "1/14/2019",
    Layout: "3/3/2019",
    PowerOn: "4/18/2019",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "PowerOn",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "APJ",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "VMC",
    Application: "eODM",
    Program: "WHL",
    KickOff: "10/12/2018",
    Schematic: "3/12/2019",
    Layout: "6/1/2019",
    PowerOn: "7/1/2019",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 4,
    CurrentStatus: "PowerOn",
    OnTrack: false,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "APJ",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "RBHE",
    Application: "Transactional",
    Program: "WHL",
    KickOff: "10/12/2018",
    Schematic: "5/7/2019",
    Layout: "5/14/2019",
    PowerOn: "6/25/2019",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 7,
    CurrentStatus: "PowerOn",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "APJ",
    SKU: "S",
    ProjectName: "StremIT",
    DesignName: "",
    Vertical: "RBHE",
    Application: "Transactional",
    Program: "CFLR",
    KickOff: "",
    Schematic: "",
    Layout: "",
    PowerOn: "",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 2,
    CurrentStatus: "Waiting",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "APJ",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "RBHE",
    Application: "Mobility",
    Program: "WHL",
    KickOff: "9/29/2018",
    Schematic: "10/23/2018",
    Layout: "2/20/2019",
    PowerOn: "5/10/2019",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 1,
    CurrentStatus: "PowerOn",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "EMEA",
    SKU: "H",
    ProjectName: "Helstar",
    DesignName: "",
    Vertical: "VMC",
    Application: "eODM",
    Program: "CFLR",
    KickOff: "3/6/2019",
    Schematic: "5/9/2019",
    Layout: "",
    PowerOn: "",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "Schematic",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "EMEA",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "VMC",
    Application: "eODM",
    Program: "WHL",
    KickOff: "10/17/2018",
    Schematic: "4/25/2019",
    Layout: "",
    PowerOn: "",
    Launch: "",
    CheckIn: "2/12/2019 12:00:00 AM",
    ActiveIPS: 1,
    CurrentStatus: "Schematic",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "APJ",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "ISD",
    Application: "Industrial",
    Program: "EHL",
    KickOff: "",
    Schematic: "",
    Layout: "",
    PowerOn: "",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 1,
    CurrentStatus: "Waiting",
    OnTrack: false,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "APJ",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "VMC",
    Application: "eODM",
    Program: "WHL",
    KickOff: "10/12/2018",
    Schematic: "",
    Layout: "",
    PowerOn: "",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "KickOff",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "APJ",
    SKU: "S",
    ProjectName: "Nomore",
    DesignName: "",
    Vertical: "RBHE",
    Application: "Transactional",
    Program: "CFLR",
    KickOff: "Canceled",
    Schematic: "",
    Layout: "",
    PowerOn: "",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "Canceled",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "APJ",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "RBHE",
    Application: "Transactional",
    Program: "WHL",
    KickOff: "4/30/2019",
    Schematic: "",
    Layout: "",
    PowerOn: "",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "KickOff",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "APJ",
    SKU: "S",
    ProjectName: "Procstream",
    DesignName: "",
    Vertical: "VMC",
    Application: "eODM",
    Program: "CFLR",
    KickOff: "2/25/2019",
    Schematic: "3/5/2019",
    Layout: "3/12/2019",
    PowerOn: "5/2/2019",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "PowerOn",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "APJ",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "VMC",
    Application: "Office-Automation",
    Program: "WHL",
    KickOff: "",
    Schematic: "",
    Layout: "",
    PowerOn: "",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 1,
    CurrentStatus: "Waiting",
    OnTrack: false,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "APJ",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "VMC",
    Application: "eODM",
    Program: "WHL",
    KickOff: "10/12/2018",
    Schematic: "2/21/2019",
    Layout: "3/1/2019",
    PowerOn: "3/12/2019",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "PowerOn",
    OnTrack: false,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "PRC",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "RBHE",
    Application: "Transactional",
    Program: "EHL",
    KickOff: "5/17/2019",
    Schematic: "",
    Layout: "",
    PowerOn: "",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "KickOff",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "PRC",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "VMC",
    Application: "eODM",
    Program: "WHL",
    KickOff: "10/15/2018",
    Schematic: "1/22/2019",
    Layout: "4/17/2019",
    PowerOn: "6/30/2019",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "PowerOn",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "PRC",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "VMC",
    Application: "Video",
    Program: "WHL",
    KickOff: "1/18/2019",
    Schematic: "3/4/2019",
    Layout: "4/30/2019",
    PowerOn: "7/9/2019",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "PowerOn",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "PRC",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "VMC",
    Application: "Video",
    Program: "WHL",
    KickOff: "10/15/2018",
    Schematic: "3/24/2019",
    Layout: "5/12/2019",
    PowerOn: "7/12/2019",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "PowerOn",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "APJ",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "ISD",
    Application: "Industrial",
    Program: "EHL",
    KickOff: "",
    Schematic: "",
    Layout: "",
    PowerOn: "",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "Waiting",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "PRC",
    SKU: "S",
    ProjectName: "VideoMicro",
    DesignName: "",
    Vertical: "RBHE",
    Application: "Visual",
    Program: "CFLR",
    KickOff: "3/7/2019",
    Schematic: "",
    Layout: "",
    PowerOn: "",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "KickOff",
    OnTrack: false,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "ASMO",
    SKU: "",
    ProjectName: "Botsford",
    DesignName: "",
    Vertical: "RBHE",
    Application: "Transactional",
    Program: "WHL",
    KickOff: "Canceled",
    Schematic: "",
    Layout: "",
    PowerOn: "",
    Launch: "",
    CheckIn: "6/8/2019 12:00:00 AM",
    ActiveIPS: 0,
    CurrentStatus: "Canceled",
    OnTrack: false,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "APJ",
    SKU: "S",
    ProjectName: "Yestek",
    DesignName: "",
    Vertical: "VMC",
    Application: "eODM",
    Program: "CFLR",
    KickOff: "3/30/2019",
    Schematic: "4/30/2019",
    Layout: "5/30/2019",
    PowerOn: "6/30/2019",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "PowerOn",
    OnTrack: false,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "APJ",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "VMC",
    Application: "eODM",
    Program: "WHL",
    KickOff: "10/12/2018",
    Schematic: "1/28/2019",
    Layout: "5/30/2019",
    PowerOn: "6/30/2019",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 1,
    CurrentStatus: "PowerOn",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "APJ",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "VMC",
    Application: "eODM",
    Program: "WHL",
    KickOff: "10/12/2018",
    Schematic: "11/26/2018",
    Layout: "3/18/2019",
    PowerOn: "4/18/2019",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "PowerOn",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "APJ",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "ISD",
    Application: "eODM",
    Program: "EHL",
    KickOff: "1/15/2019",
    Schematic: "",
    Layout: "",
    PowerOn: "",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "KickOff",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "APJ",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "VMC",
    Application: "Office-Automation",
    Program: "WHL",
    KickOff: "10/12/2018",
    Schematic: "",
    Layout: "",
    PowerOn: "",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "KickOff",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "APJ",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "ISD",
    Application: "Industrial",
    Program: "WHL",
    KickOff: "10/12/2018",
    Schematic: "1/17/2019",
    Layout: "2/15/2019",
    PowerOn: "3/15/2019",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "PowerOn",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "PRC",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "VMC",
    Application: "eODM",
    Program: "WHL",
    KickOff: "10/15/2018",
    Schematic: "1/8/2019",
    Layout: "3/22/2019",
    PowerOn: "7/4/2019",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "PowerOn",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "PRC",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "VMC",
    Application: "eODM",
    Program: "EHL",
    KickOff: "4/22/2019",
    Schematic: "",
    Layout: "",
    PowerOn: "",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "KickOff",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "PRC",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "VMC",
    Application: "eODM",
    Program: "WHL",
    KickOff: "10/15/2018",
    Schematic: "1/11/2019",
    Layout: "2/24/2019",
    PowerOn: "3/15/2019",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 1,
    CurrentStatus: "PowerOn",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "EMEA",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "VMC",
    Application: "eODM",
    Program: "EHL",
    KickOff: "5/22/2019",
    Schematic: "",
    Layout: "",
    PowerOn: "",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 1,
    CurrentStatus: "KickOff",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "EMEA",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "VMC",
    Application: "eODM",
    Program: "WHL",
    KickOff: "9/25/2018",
    Schematic: "3/20/2019",
    Layout: "5/1/2019",
    PowerOn: "5/21/2019",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 1,
    CurrentStatus: "PowerOn",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "EMEA",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "ISD",
    Application: "Industrial",
    Program: "EHL",
    KickOff: "1/15/2019",
    Schematic: "",
    Layout: "",
    PowerOn: "",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "KickOff",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "EMEA",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "VMC",
    Application: "eODM",
    Program: "WHL",
    KickOff: "10/19/2018",
    Schematic: "11/19/2018",
    Layout: "3/30/2019",
    PowerOn: "5/29/2019",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "PowerOn",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "PRC",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "ISD",
    Application: "Industrial",
    Program: "EHL",
    KickOff: "",
    Schematic: "",
    Layout: "",
    PowerOn: "",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "Waiting",
    OnTrack: false,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "PRC",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "ISD",
    Application: "Industrial",
    Program: "WHL",
    KickOff: "10/15/2018",
    Schematic: "10/14/2018",
    Layout: "11/14/2018",
    PowerOn: "",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "Layout",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "APJ",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "ISD",
    Application: "Industrial",
    Program: "EHL",
    KickOff: "7/3/2019",
    Schematic: "",
    Layout: "",
    PowerOn: "",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "KickOff",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "APJ",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "VMC",
    Application: "eODM",
    Program: "WHL",
    KickOff: "10/12/2018",
    Schematic: "",
    Layout: "",
    PowerOn: "",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "KickOff",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "EMEA",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "VMC",
    Application: "eODM",
    Program: "WHL",
    KickOff: "3/30/2019",
    Schematic: "4/30/2019",
    Layout: "5/30/2019",
    PowerOn: "6/30/2019",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "PowerOn",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "ASMO",
    SKU: "H",
    ProjectName: "Supertech",
    DesignName: "",
    Vertical: "ISD",
    Application: "Industrial",
    Program: "CFLR",
    KickOff: "2/19/2019",
    Schematic: "2/28/2019",
    Layout: "3/1/2019",
    PowerOn: "",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "Layout",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "APJ",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "VMC",
    Application: "eODM",
    Program: "WHL",
    KickOff: "10/12/2018",
    Schematic: "",
    Layout: "",
    PowerOn: "",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "KickOff",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "APJ",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "ISD",
    Application: "Industrial",
    Program: "WHL",
    KickOff: "Canceled",
    Schematic: "",
    Layout: "",
    PowerOn: "",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "Canceled",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "APJ",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "ISD",
    Application: "Industrial",
    Program: "WHL",
    KickOff: "10/12/2018",
    Schematic: "3/15/2019",
    Layout: "4/20/2019",
    PowerOn: "7/2/2019",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 1,
    CurrentStatus: "PowerOn",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "EMEA",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "ISD",
    Application: "Industrial",
    Program: "WHL",
    KickOff: "9/19/2018",
    Schematic: "1/24/2019",
    Layout: "4/12/2019",
    PowerOn: "",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "Layout",
    OnTrack: false,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "APJ",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "RBHE",
    Application: "Transactional",
    Program: "WHL",
    KickOff: "9/27/2018",
    Schematic: "10/2/2018",
    Layout: "11/10/2018",
    PowerOn: "12/15/2018",
    Launch: "5/10/2019",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "Launch",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "APJ",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "RBHE",
    Application: "Visual",
    Program: "WHL",
    KickOff: "12/21/2018",
    Schematic: "2/6/2019",
    Layout: "3/20/2019",
    PowerOn: "5/10/2019",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 1,
    CurrentStatus: "PowerOn",
    OnTrack: false,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "APJ",
    SKU: "H",
    ProjectName: "zDeshouse",
    DesignName: "",
    Vertical: "RBHE",
    Application: "Transactional",
    Program: "CFLR",
    KickOff: "2/14/2019",
    Schematic: "",
    Layout: "",
    PowerOn: "",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "KickOff",
    OnTrack: false,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "APJ",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "RBHE",
    Application: "Mobility",
    Program: "WHL",
    KickOff: "Canceled",
    Schematic: "",
    Layout: "",
    PowerOn: "",
    Launch: "",
    CheckIn: "2/14/2019 12:00:00 AM",
    ActiveIPS: 0,
    CurrentStatus: "Canceled",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "APJ",
    SKU: "H",
    ProjectName: "uBoards",
    DesignName: "",
    Vertical: "VMC",
    Application: "eODM",
    Program: "CFLR",
    KickOff: "3/21/2019",
    Schematic: "4/1/2019",
    Layout: "5/1/2019",
    PowerOn: "7/1/2019",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "PowerOn",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "APJ",
    SKU: "S",
    ProjectName: "AllPCB",
    DesignName: "Design Name x100",
    Vertical: "VMC",
    Application: "eODM",
    Program: "CFLR",
    KickOff: "3/21/2019",
    Schematic: "4/5/2019",
    Layout: "5/5/2019",
    PowerOn: "7/4/2019",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 1,
    CurrentStatus: "PowerOn",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "APJ",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "VMC",
    Application: "eODM",
    Program: "EHL",
    KickOff: "",
    Schematic: "",
    Layout: "",
    PowerOn: "",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "Waiting",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "APJ",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "ISD",
    Application: "Industrial",
    Program: "EHL",
    KickOff: "5/13/2019",
    Schematic: "",
    Layout: "",
    PowerOn: "",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "KickOff",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "ASMO",
    SKU: "",
    ProjectName: "AmazeTech",
    DesignName: "",
    Vertical: "RBHE",
    Application: "Transactional",
    Program: "WHL",
    KickOff: "7/10/2018",
    Schematic: "9/6/2018",
    Layout: "11/6/2018",
    PowerOn: "12/6/2018",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 1,
    CurrentStatus: "PowerOn",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "ASMO",
    SKU: "",
    ProjectName: "This Inc",
    DesignName: "",
    Vertical: "RBHE",
    Application: "Transactional",
    Program: "WHL",
    KickOff: "10/24/2018",
    Schematic: "",
    Layout: "",
    PowerOn: "",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 1,
    CurrentStatus: "KickOff",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "APJ",
    SKU: "H",
    ProjectName: "YABN",
    DesignName: "",
    Vertical: "VMC",
    Application: "eODM",
    Program: "CFLR",
    KickOff: "3/6/2019",
    Schematic: "3/12/2019",
    Layout: "3/27/2019",
    PowerOn: "6/26/2019",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "PowerOn",
    OnTrack: false,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "APJ",
    SKU: "S",
    ProjectName: "Dall",
    DesignName: "",
    Vertical: "VMC",
    Application: "eODM",
    Program: "CFLR",
    KickOff: "3/6/2019",
    Schematic: "",
    Layout: "",
    PowerOn: "",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "KickOff",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "APJ",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "VMC",
    Application: "eODM",
    Program: "WHL",
    KickOff: "10/28/2018",
    Schematic: "",
    Layout: "",
    PowerOn: "",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 1,
    CurrentStatus: "KickOff",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "APJ",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "VMC",
    Application: "eODM",
    Program: "WHL",
    KickOff: "10/12/2018",
    Schematic: "11/9/2018",
    Layout: "1/1/2019",
    PowerOn: "7/1/2019",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "PowerOn",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "APJ",
    SKU: "S",
    ProjectName: "HPT",
    DesignName: "",
    Vertical: "VMC",
    Application: "eODM",
    Program: "CFLR",
    KickOff: "3/13/2019",
    Schematic: "3/22/2019",
    Layout: "5/24/2019",
    PowerOn: "6/3/2019",
    Launch: "",
    CheckIn: "3/22/2019",
    ActiveIPS: 0,
    CurrentStatus: "PowerOn",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "APJ",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "RBHE",
    Application: "Transactional",
    Program: "WHL",
    KickOff: "9/27/2018",
    Schematic: "11/23/2018",
    Layout: "12/20/2018",
    PowerOn: "2/10/2019",
    Launch: "5/10/2019",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "Launch",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    id: 640,
    FAE: "",
    GEO: "APJ",
    SKU: "S",
    ProjectName: "Aopera",
    DesignName: "",
    Vertical: "VMC",
    Application: "eODM",
    Program: "CFLR",
    KickOff: "2/20/2019",
    Schematic: "3/5/2019",
    Layout: "4/5/2019",
    PowerOn: "5/30/2019",
    Launch: "6/30/2019",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "Launch",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "APJ",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "VMC",
    Application: "eODM",
    Program: "WHL",
    KickOff: "10/12/2018",
    Schematic: "2/19/2019",
    Layout: "5/1/2019",
    PowerOn: "7/15/2019",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "PowerOn",
    OnTrack: false,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "EMEA",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "ISD",
    Application: "Industrial",
    Program: "EHL",
    KickOff: "",
    Schematic: "",
    Layout: "",
    PowerOn: "",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "Waiting",
    OnTrack: false,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "PRC",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "VMC",
    Application: "eODM",
    Program: "WHL",
    KickOff: "10/15/2018",
    Schematic: "1/4/2019",
    Layout: "2/25/2019",
    PowerOn: "4/15/2019",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "PowerOn",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "PRC",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "ISD",
    Application: "Industrial",
    Program: "EHL",
    KickOff: "",
    Schematic: "",
    Layout: "",
    PowerOn: "",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "Waiting",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "EMEA",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "VMC",
    Application: "eODM",
    Program: "WHL",
    KickOff: "10/5/2018",
    Schematic: "11/14/2018",
    Layout: "12/21/2018",
    PowerOn: "2/20/2019",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "PowerOn",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "EMEA",
    SKU: "H",
    ProjectName: "Zellow",
    DesignName: "",
    Vertical: "VMC",
    Application: "eODM",
    Program: "CFLR",
    KickOff: "3/2/2019",
    Schematic: "4/2/2019",
    Layout: "4/30/2019",
    PowerOn: "5/30/2019",
    Launch: "6/10/2019",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "Launch",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "APJ",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "ISD",
    Application: "Industrial",
    Program: "WHL",
    KickOff: "Canceled",
    Schematic: "",
    Layout: "",
    PowerOn: "",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "Canceled",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "PRC",
    SKU: "S",
    ProjectName: "Yerty",
    DesignName: "",
    Vertical: "VMC",
    Application: "eODM",
    Program: "CFLR",
    KickOff: "5/14/2019",
    Schematic: "",
    Layout: "",
    PowerOn: "",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "KickOff",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "PRC",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "VMC",
    Application: "eODM",
    Program: "WHL",
    KickOff: "10/15/2018",
    Schematic: "3/5/2019",
    Layout: "5/23/2019",
    PowerOn: "6/30/2019",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "PowerOn",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "PRC",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "VMC",
    Application: "eODM",
    Program: "WHL",
    KickOff: "10/15/2018",
    Schematic: "2/20/2019",
    Layout: "5/30/2019",
    PowerOn: "6/30/2019",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "PowerOn",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "EMEA",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "ISD",
    Application: "Industrial",
    Program: "EHL",
    KickOff: "1/15/2019",
    Schematic: "",
    Layout: "",
    PowerOn: "",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "KickOff",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "APJ",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "VMC",
    Application: "eODM",
    Program: "WHL",
    KickOff: "10/12/2018",
    Schematic: "3/20/2019",
    Layout: "4/25/2019",
    PowerOn: "6/28/2019",
    Launch: "",
    CheckIn: "4/20/2019",
    ActiveIPS: 1,
    CurrentStatus: "PowerOn",
    OnTrack: false,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "APJ",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "VMC",
    Application: "eODM",
    Program: "WHL",
    KickOff: "10/12/2018",
    Schematic: "4/20/2019",
    Layout: "6/6/2019",
    PowerOn: "7/9/2019",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "PowerOn",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "PRC",
    SKU: "S",
    ProjectName: "Curtis-Right",
    DesignName: "",
    Vertical: "VMC",
    Application: "Video",
    Program: "CFLR",
    KickOff: "6/5/2019",
    Schematic: "",
    Layout: "",
    PowerOn: "",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "KickOff",
    OnTrack: false,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "APJ",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "VMC",
    Application: "eODM",
    Program: "WHL",
    KickOff: "10/12/2018",
    Schematic: "6/23/2019",
    Layout: "",
    PowerOn: "",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "Schematic",
    OnTrack: false,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "EMEA",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "VMC",
    Application: "eODM",
    Program: "WHL",
    KickOff: "",
    Schematic: "",
    Layout: "",
    PowerOn: "",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 1,
    CurrentStatus: "Waiting",
    OnTrack: false,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "EMEA",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "VMC",
    Application: "eODM",
    Program: "WHL",
    KickOff: "10/16/2018",
    Schematic: "11/14/2018",
    Layout: "12/7/2018",
    PowerOn: "1/28/2019",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 1,
    CurrentStatus: "PowerOn",
    OnTrack: false,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "ASMO",
    SKU: "S",
    ProjectName: "Others",
    DesignName: "",
    Vertical: "VMC",
    Application: "eODM",
    Program: "CFLR",
    KickOff: "3/1/2019",
    Schematic: "2/7/2019",
    Layout: "",
    PowerOn: "",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 1,
    CurrentStatus: "Schematic",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "APJ",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "RBHE",
    Application: "Mobility",
    Program: "WHL",
    KickOff: "10/12/2018",
    Schematic: "3/4/2019",
    Layout: "4/8/2019",
    PowerOn: "5/3/2019",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "PowerOn",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "APJ",
    SKU: "H",
    ProjectName: "Final Co",
    DesignName: "",
    Vertical: "VMC",
    Application: "eODM",
    Program: "CFLR",
    KickOff: "3/1/2019",
    Schematic: "6/25/2019",
    Layout: "3/9/2019",
    PowerOn: "4/9/2019",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "PowerOn",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "PRC",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "VMC",
    Application: "Video",
    Program: "WHL",
    KickOff: "Canceled",
    Schematic: "",
    Layout: "",
    PowerOn: "",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "Canceled",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "PRC",
    SKU: "S",
    ProjectName: "IPCCo",
    DesignName: "",
    Vertical: "VMC",
    Application: "Video",
    Program: "CFLR",
    KickOff: "3/19/2019",
    Schematic: "6/3/2019",
    Layout: "6/3/2019",
    PowerOn: "",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "Layout",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "PRC",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "VMC",
    Application: "Video",
    Program: "EHL",
    KickOff: "7/1/2019",
    Schematic: "",
    Layout: "",
    PowerOn: "",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "KickOff",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "APJ",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "ISD",
    Application: "Industrial",
    Program: "WHL",
    KickOff: "10/12/2018",
    Schematic: "3/25/2019",
    Layout: "5/10/2019",
    PowerOn: "6/30/2019",
    Launch: "",
    CheckIn: "2/14/2019",
    ActiveIPS: 0,
    CurrentStatus: "PowerOn",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "APJ",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "RBHE",
    Application: "Transactional",
    Program: "WHL",
    KickOff: "7/10/2018",
    Schematic: "9/6/2018",
    Layout: "11/6/2018",
    PowerOn: "12/6/2018",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 11,
    CurrentStatus: "PowerOn",
    OnTrack: false,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "APJ",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "RBHE",
    Application: "Transactional",
    Program: "EHL",
    KickOff: "",
    Schematic: "",
    Layout: "",
    PowerOn: "",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "Waiting",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "PRC",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "RBHE",
    Application: "Transactional",
    Program: "EHL",
    KickOff: "7/20/2019",
    Schematic: "",
    Layout: "",
    PowerOn: "",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 1,
    CurrentStatus: "KickOff",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "PRC",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "VMC",
    Application: "eODM",
    Program: "WHL",
    KickOff: "10/15/2018",
    Schematic: "1/15/2019",
    Layout: "4/22/2019",
    PowerOn: "5/10/2019",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "PowerOn",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "ASMO",
    SKU: "",
    ProjectName: "NoName",
    DesignName: "",
    Vertical: "VMC",
    Application: "eODM",
    Program: "EHL",
    KickOff: "1/15/2019",
    Schematic: "",
    Layout: "",
    PowerOn: "",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "KickOff",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "PRC",
    SKU: "",
    ProjectName: "",
    DesignName: "",
    Vertical: "VMC",
    Application: "Video",
    Program: "WHL",
    KickOff: "10/15/2018",
    Schematic: "5/6/2019",
    Layout: "",
    PowerOn: "",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 0,
    CurrentStatus: "Schematic",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  },
  {
    FAE: "",
    GEO: "PRC",
    SKU: "",
    ProjectName: "Sasee",
    DesignName: "",
    Vertical: "VMC",
    Application: "Video",
    Program: "WHL",
    KickOff: "Canceled",
    Schematic: "",
    Layout: "",
    PowerOn: "",
    Launch: "",
    CheckIn: "",
    ActiveIPS: 1,
    CurrentStatus: "Canceled",
    OnTrack: true,
    Flag: false,
    AccountType: "ODM",
  }
];





//defaults via server when only program and geo filter
//window.location.hash = "Program=WHL.Vertical=VMC"
//window.location.hash.replace('#','').split('.').forEach( item => console.log( item.split('=')))
//gets us one array per split [split, value]
var filters = []; //TODO: init via window.location.hash
var filterorder = []; //TODO: init via window.location.hash; also, do we really need to track twice? makes things easier, so yes for now...
var displayorder = filterorder;
var splitstats = {}; //aka design stats post split filters... for display at least (will still capture stats without the current level's filter applied for each split that is being filtered to show; all other stats will be post all filters)
var defaultsplitorder = ['Program', 'GEO', 'Vertical', 'Application']
var showvalues = true;
var reporttype = 'hw' //TO ADD
var stagestats = {};
var swimstats = {};
var ISVstats = {};

//none of the items in metadata can have any spaces... should be a-Z, 0-9 and - or _ only
let metadata = {
  GEO: ["PRC", "APJ", "ASMO", "EMEA"],
  Vertical: ["VMC", "RBHE", "ISD"],
  Program: ["CFLR", "WHL", "EHL"],
  Swimlanes: ['Core', 'Atom', 'Xeon', 'VPU', 'Other'],
  Program2Swimlane: {"CFLR": "Core", "WHL": "Core", "EHL": "Atom"},
  AccountTypes: ["ODM", "OEM", "ISV", "SI", "OSV", "IBV"],
  ISVs: ["ISV", "SI", "OSV", "IBV"],
  Application: [
    "eODM",
    "Office Automation",
    "Public Sector",
    "Video",
    "Mobility",
    "Transactional",
    "Visual",
    "Energy",
    "Industrial"
  ],
  Milestones: ["KickOff", "Schematic", "Layout", "PowerOn", "Launch", "Waiting", "Canceled"],
  Splits: ["Vertical", "Application", "GEO", "Program"],
  Dependents: []
};

//TO ADD:
let ea_urls = {
  "design": "http://issuetracker.intel.com/eatracking/Design?id=",
  "editDesign": "http://issuetracker.intel.com/eatracking/Design/Edit/"
};

//TO UPDATE: parse_url_hash in production
//window.location.hash = "Vertical=ISD" once page is loaded...
//parse hash to init certain options
(function () {
  //window.location.hash = "Vertical=VMC,ISD.GEO=APJ,EMEA.Application=eODM"//testing...
  let options = window.location.hash.replace('#','').split('.')
  options = options == "" ? [] : options//default to empty array
  for (item of options) {
    key = item.split('=')[0]
    value = item.split('=')[1]
    values = value.split(',')
    if (key == 'sw' && value == 'true') {
      reporttype = 'sw';
    } else if (metadata.Splits.includes(key)) {
      filters.push({'Split': key, 'Value': values})
      filterorder.push(key)
    }
  }
})();


function setFocus(name) { $(name).focus() }

function gs_showModal () {
  $('#globalsearchModal').modal('show')
  setTimeout(setFocus, 550, '#globalSearch')
}


onkeydown = (e) => { 
  if ((e.metaKey || e.ctrlKey) && (e.code == 'Space')) {
    gs_showModal()
  }
}

gs_vis_idx = -1
function gs_updateSelection (key) {
  visible_des = $('#gsDesigns .list-group-item:not(.d-none)')
  max_displayed = $('#gsDesigns .list-group-item:not(.d-none)').length
  $('#gsDesigns .list-group-item.active').removeClass('active')
  key == 'ArrowDown' ? gs_vis_idx++ : gs_vis_idx--// = sel_idx == max_idx ? 0 : sel_idx++
  gs_vis_idx = gs_vis_idx < 0 ? 0 : gs_vis_idx
  gs_vis_idx = gs_vis_idx >= max_displayed ? max_displayed-1 : gs_vis_idx
  //max_displayed
  $(visible_des[gs_vis_idx]).addClass('active')
}

function gs_isSelectionVisible () {
  active_selection = $('#gsDesigns .list-group-item.active')
  if (active_selection.length > 0) {//make sure we have a selection
    outer_box = $('#globalSearchResults')[0].getBoundingClientRect()
    selected_box = active_selection[0].getBoundingClientRect()
    active_top = $(active_selection[0]).position().top
    top_visible = outer_box.top < selected_box.top && outer_box.bottom > selected_box.top
    bottom_visible = outer_box.top < selected_box.bottom && outer_box.bottom > selected_box.bottom
    return top_visible || bottom_visible
  }
}

function gs_keyNavigation (event) {
    key = event.key
    if (key == 'ArrowDown' || key == 'ArrowUp') {
        event.preventDefault()
        gs_updateSelection(key)
        gs_updateScroll(key)
    }
    if (key == 'Enter') {
        id = $($('#gsDesigns .list-group-item.active')[0]).data('id')
        if (event.metaKey || event.ctrlKey) {
            url = ea_urls['editDesign'] + id
        } else {
            url = ea_urls['design'] + id
        }
        if (id) {
            window.open(url, '_self')
            //console.log(url)
        }
    }
}

function gs_updateScroll (key) {
    //scroll to ensure selection is visible and ideally one item below/above as well for context
    outer_box = $('#globalSearchResults')[0].getBoundingClientRect()
    selected_box = $('#gsDesigns .list-group-item.active')[0].getBoundingClientRect()
    active_top_pos = $($('#gsDesigns .list-group-item.active')[0]).position().top
    outer_box.top > selected_box.top ? $('#globalSearchResults').scrollTop(active_top_pos - $('#globalSearchResults').height() + 4 * $($('#gsDesigns .list-group-item.active')[0]).height()) : false
    selected_box.bottom > outer_box.bottom ? $('#globalSearchResults').scrollTop(active_top_pos) : false
}


// UPDATED to be more efficient 12/21/2022
gslastSearchString = ""
function globalSearch (event) {
  key = event.key
  if (key != 'ArrowDown' && key != 'ArrowUp') {
    text = $('#globalSearch').val().toLowerCase()
    words = text.split(' ')
    var els = $('#globalSearchResults .list-group-item').toArray()
    var dattrs = Object.keys(gsAttrs).filter(item => gsAttrs[item])
    els.forEach( (el, i) => {
      matchesSomeAttrs = (word) => {
        negate = word.startsWith("!") ? true : false
        word = word.startsWith("!") ? word.substring(1) : word
        contains = dattrs.some( (attr) => {
          return $(el).data(attr) && $(el).data(attr).toLowerCase().indexOf(word) >= 0
        })
        return negate ? !contains : contains
      }
      words.every(matchesSomeAttrs) ? $(el).removeClass('d-none') : $(el).addClass('d-none')
    })
    if (text.trim() != gslastSearchString) {
      if ($('#gsDesigns .list-group-item.active').hasClass('d-none') || !gs_isSelectionVisible()) {//if hidden
        gs_vis_idx = -1
      } else {
        gs_vis_idx = $('#gsDesigns .list-group-item:not(.d-none)').index($('#gsDesigns .active'))
      }
      gslastSearchString = text.trim()
    }
    $('#gsDesignsTotal').text($('#gsDesigns .list-group-item:not(.d-none)').length)
  }
}

gsAttrs = {'swimlane': true, 'program': true, 'account': true, 'geo': true, 'extra': true, 'stage': true, 'design': true, 'type': true, 'vertical': true, 'application': true, 'leads': true, 'flag': true}

function gsToggle (opt) {
  if (opt in gsAttrs) {
    btn = $(`#gsToggle${opt}`)
    if (gsAttrs[opt]) {
      //show disabled state
      btn.addClass('btn-outline-secondary')
      btn.removeClass('btn-dark')
    } else {
      //show enabled state
      btn.removeClass('btn-outline-secondary')
      btn.addClass('btn-dark')
    }
    gsAttrs[opt] = ! gsAttrs[opt]
    globalSearch(false)
  }
}

flags = {"FYI": "<i class='bi bi-info-circle'></i> ","Question": "<i class='bi bi-question-circle'></i> ", "Help Needed!": "<i class='bi bi-exclamation-circle-fill'></i> "}
alert_class = {"FYI": "alert-info ","Question": "alert-primary", "Help Needed!": "alert-danger"}

function gsdesigns () {
  //TODO: milestone abv, additional program names, diff formatting for canceled designs, "OnTrack" desgin property
  for (design of designs) {
    type = metadata.ISVs.includes(design.AccountType) ? "SW" : "HW"
    type += " " + design.AccountType
    flag = design.Flag ? flags[design.Flag] : ""
    des_html = `<li class="list-group-item" data-id="${design.id}" data-design="${design.ProjectName} ${design.DesignName}" data-account="${design.Account}" data-stage="${design.CurrentStatus}" data-extra="${design.OnTrack ? '' : 'behind'}" data-program="${design.Program}" data-geo="${design.GEO}" data-type="${type}" data-flag="${design.Flag ? design.Flag : ''}" data-vertical="${design.Vertical}" data-application="${design.Application}" data-swimlane="${metadata.Program2Swimlane[design.Program]}" data-leads="${design.FAE} ${design.PAE}"><span class="badge Program${design.Program}">${design.Program}</span> <strong>${design.ProjectName}</strong> ${design.DesignName} <span class="badge badge-pill bg-${design.CurrentStatus}">${design.CurrentStatus /*should be abv*/}</span> ${flag} <span class="text-danger">${design.OnTrack ? "" : "behind"}</span>`
des_html += design.ActiveIPS > 0 ? ` <span class="text-muted">w/${design.ActiveIPS} active IPS</span></li>` : "</li>"
    $('#gsDesigns').append(des_html)
  }
  $('#gsDesigns > .list-group-item').sort( (a,b) => $(a).data('design').localeCompare($(b).data('design')) ).appendTo('#gsDesigns')
  $('#gsDesigns > .list-group-item').sort( (a,b) => $(a).data('program').localeCompare($(b).data('program')) ).appendTo('#gsDesigns')
  $('#gsDesignsTotal').text($('#gsDesigns .list-group-item:not(.d-none)').length)
  $('#gsDesigns > .list-group-item').click( function () {
    url = ea_urls['design'] + $(this).data('id')
    console.log(url)
  })
  $('#globalSearch').on('keyup', globalSearch) //TO ADD
  $('#globalSearch').on('keydown', gs_keyNavigation) //TO ADD
}
gsdesigns()//TO ADD: this call to ThiredAsyncFunction (production) to generate the list of designs

//TO UPDATE
function updatehash () {
  window.location.hash = "";
  items = []
  for (filter of filters) {
    items.push(filter.Split + "=" + filter.Value.join(','))
    window.location.hash += "." + filter.Split + "=" + filter.Value.join(',');
  }
  reporttype == 'sw' ? items.push('sw=true') : false
  window.location.hash = items.join('.')
}

updatedisplay();

defaultsplitorder.forEach((dsplit) => { sort_split(dsplit) } ) //TO ADD (to ThiredAsyncFunction)

function id_str (str) {
  return str.replaceAll(/[\W]+/g, "-").replace(/-+$/,"")
}

function disp_nm (split, id) {
  for (value of metadata[split]){
    if (id_str(value) == id)
      return value
  }
}

//TO ADD
function toggle_report_type() {
  reporttype == 'hw' ? reporttype = 'sw' : reporttype = 'hw'
  reporttype == 'hw' ? defaultsplitorder = ['Program', 'GEO', 'Vertical', 'Application'] : defaultsplitorder = ['Application', 'GEO', 'Program']
  setTimeout(() => {$('#type-pill').addClass('px-3')}, 200)
  setTimeout(() => {$('#type-pill').removeClass('px-3')}, 800)
}
setTimeout(() => {$('#type-pill').addClass('px-3 py-2')}, 500)
setTimeout(() => {$('#type-pill').removeClass('px-3 py-2')}, 1100)


//TO ADD
function is_reporttype (design) {
  is_isv = metadata.ISVs.includes(design.AccountType)
  filtered = null
  reporttype == 'sw' ? filtered = is_isv : filtered = !is_isv
  return filtered
}

//TO ADD
function displayreporttype () {
  reporttype == 'hw' ? display_hw() : display_sw()
  updatehash()
  updateProgramUrls()
}

//TO ADD
function displaykostats () {
  year = new Date().getFullYear()
  program_counts = {}
  prior_program_counts = {}
  metadata.Program.forEach( (program) => { program_counts[program] = 0; prior_program_counts[program] = 0 } )
  for (des of designs) {
    if (matchesfilter(des, filters, filters.length - 1) && is_reporttype(des)) {
      if ( (new Date(des['KickOff'])).getFullYear() == year )   { program_counts[des['Program']]++ }
      if ( (new Date(des['KickOff'])).getFullYear() == year-1 ) { prior_program_counts[des['Program']]++ }
    }
  }
  for (prog of metadata.Program) {
    $(`#${prog}Stat`).html('')
    if (program_counts[prog] > 0 || prior_program_counts[prog] > 0) {
      $(`#${prog}Stat`).html(`${program_counts[prog]} KickOff in '${year.toString().substring(2,4)}<br/>${prior_program_counts[prog]} in '${(year-1).toString().substring(2,4)}`)
    }
  }
  //<span data-toggle="tooltip" data-placement="bottom" title="2 KickOff in '21'">1 KickOFf in '22'</span>
}

//TO ADD
function display_hw(){
  $('#totalISVs').addClass('text-black-50').removeClass('font-weight-normal')
  $('#totalISVs').parent().addClass('text-muted')
  $('#totaldesigns').removeClass('text-black-50').addClass('font-weight-normal')
  $('#totaldesigns').parent().removeClass('text-muted')
  $('#report_type').html('HW Designs')
  $('#type-pill').addClass('badge-dark').removeClass('badge-info')
  $('#type-pill').html('HW')
  $('h6.card-subtitle.text-muted').html('Designs')
}

//TO ADD
function display_sw(){
  $('#totalISVs').removeClass('text-black-50').addClass('font-weight-normal')
  $('#totalISVs').parent().removeClass('text-muted')
  $('#totaldesigns').addClass('text-black-50').removeClass('font-weight-normal')
  $('#totaldesigns').parent().addClass('text-muted')
  $('#report_type').html('SW Partners')
  $('#type-pill').removeClass('badge-dark').addClass('badge-info')
  $('#type-pill').html('SW')
  $('h6.card-subtitle.text-muted').html('Partners')
}

//TO ADD
function updateProgramUrls () {
  for (program of metadata.Program) {
    let main_url_jq = $(`#${program}Url`);
    let ahref = main_url_jq.attr('href')
    ahref.includes('&sw=True') && reporttype == 'hw' ? ahref = ahref.replace('&sw=True', '') : false
    !ahref.includes('&sw=True') && reporttype == 'sw' ? ahref = ahref + '&sw=True' : false
    main_url_jq.attr('href', ahref)
    let other_url_jq = $(`#${program}ISV a`);
    let ohref = other_url_jq.attr('href')
    if (ohref) {
      ohref.includes('&sw=True') && reporttype == 'sw' ? ohref = ohref.replace('&sw=True', '') : false
      !ohref.includes('&sw=True') && reporttype == 'hw' ? ohref = ohref + '&sw=True' : false
      other_url_jq.attr('href', ohref)
    }
  }
}

function ISVsPerYear () {
	years = {}
	designs.forEach(des => years[new Date(des['KickOff']).getFullYear()] = 0)
	designs.forEach((des) => { metadata.ISVs.includes(des['AccountType']) ? years[(new Date(des['KickOff'])).getFullYear()]++ : false })
	return years
}

//TODO update active/inactive states and display=none (via class="d-none")


//helper function to see if a design matches all filters specified
function matchesfilter(design, filter, filteruptoindex) {
  let maxindex = filteruptoindex >= filter.length ? filter.length - 1 : filteruptoindex;
  let stillmatches = true;
  if (maxindex >= 0) {
    for (let i = 0; i <= maxindex; i++) {
      stillmatches &&= filter[i].Value.includes(id_str(design[filter[i].Split]))
    }
  }
  return stillmatches;
}

/*
function splitchildren (mdata,split) {
  return mdata[split+"Splits"];
}
//concat all split children, remove any na/undefied, hide in UI any child not in filter selection
*/

function designfilter(split, value, arrdata) {
  return arrdata.filter(function (arrdata) {
    return arrdata[split] === value;
  });
}

// initsplitstats:
// figure out all stats needed and init total/% to 0/null:
// @done (TODO: need to init for metadata.Milestones in the Program subsplits/values)
function initsplitstats() {
  splitstats = {}; //reset splitstats
  for (split of metadata.Splits) {
    for (subsplit of metadata[split]) {
      splitstats[split + id_str(subsplit)] = { total: 0, percentage: null, split: split, value: id_str(subsplit) };
    }
  }
}

//TO UPDATE
// computesplitstats
function computesplitstats() {
  // update individual value totals
  for (design of designs) {
    for (split of metadata.Splits) {
      for (value of metadata[split]) {
        value = id_str(value)
        // This section figures out what level of filtering is needed for the current split.
        //  apply the matchesfilter function if split not in filters (index == -1) or is in filters w/index > 0:
        //   if split in filters, apply filters 0->index-1 (up just just before this one) otherwise apply all filters
        let i = filterorder.indexOf(split);
        let match =
          i == 0 ? true : i == -1
            ? matchesfilter(design, filters, filters.length - 1) : matchesfilter(design, filters, i - 1);
        match = match && is_reporttype(design)
        if (id_str(design[split]) === value && match) {
          splitstats[split + value].total++;
          // if split is Program, update this stat's total for CurrentStatus (PO, Launch, etc.):
          // splitstats[split + value][design.CurrentStatus+"total"]++
        }
      }
    }
  }

  // Update split totals (ProgramTotal, VerticalTotal, GEOTotal, etc.) and all percentages post filters
  for (split of metadata.Splits) {
    splitstats["Total" + split] = 0;
    for (value of metadata[split]) {
      splitstats["Total" + split] += splitstats[split + id_str(value)].total;
    }
    for (value of metadata[split]) {
      splitstats[split + id_str(value)].percentage = (100 * splitstats[split + id_str(value)].total) / splitstats["Total" + split];
    }
  }
}

//TO ADD
function sort_split(split) {
  $(`#split${split} .progress-bar`).sort( (a,b) => $(`#legend${split}` + $(b).data('splitvalue')).html() - $(`#legend${split}` +$(a).data('splitvalue')).html() ).appendTo(`#split${split} .progress`)
  $(`#split${split} .legend-item`).sort( (a,b) => $(`#legend${split}` + $(b).data('splitvalue')).html() - $(`#legend${split}` +$(a).data('splitvalue')).html() ).appendTo(`#split${split} .legend`)
}

function initstages() {
  for (program of metadata.Program) {
    stagestats[program] = { total: 0 };
    for (stage of metadata.Milestones) {
      stagestats[program][stage] = { total: 0, percentage: null };
    }
  }
}

//TO UPDATE
function computestagestats () {
  for (design of designs) {
    if (matchesfilter(design, filters, filters.length - 1) && is_reporttype(design)) {
      let program = design.Program
      let milestone = design.CurrentStatus;
      stagestats[program].total++
      stagestats[program][milestone].total++
    }
  }
  for (program in stagestats) {
    for (milestone of metadata.Milestones) {
      stagestats[program][milestone].percentage = (stagestats[program][milestone].total/stagestats[program].total)*100;
    }
  }
}

function computesplitsdisplayorder() {
  // Determine new dispaly order of splits: get the original order (always via server) and the
  // current filterorder, then merge (remove filterorder items from defaultsplitorder, add to
  // begining as ordered in filterorder):
  displayorder = filterorder;
  let remaining = defaultsplitorder.filter(function (defaultsplitorderitem) {
    return !(filterorder.indexOf(defaultsplitorderitem) >= 0); // is this split not a filter?
  });
  for (dependent of metadata.Dependents) {
    //if parent is in the filter and child is not, append child
    displayorder = (displayorder.indexOf(dependent.Parent) >= 0 && displayorder.indexOf(dependent.Child) < 0)
        ? displayorder.concat(dependent.Child)
        : displayorder;
  }
  displayorder = displayorder.concat(remaining);
}


//TO UPDATE
//update splitstats["TotalFiltered"] w/total post-filter
function computefilteredtotalstat() {
  // Save total designs for currently selected split to splitstats accordingly for later
  let filteredtotal = 0;
  for (design of designs) {
    if (matchesfilter(design, filters, filters.length - 1) && is_reporttype(design)) {
      filteredtotal++;
    }
  }
  splitstats["TotalFiltered"] = filteredtotal;
}

function initswimstats () {
  for (swimlane of metadata.Swimlanes) {
    swimstats[swimlane] = 0
  }
}


//TO UPDATE
//for each swimlane: {<swimlane>: 0, ...})
function computefilteredswimstat () {
  for (design of designs) {
    if (matchesfilter(design, filters, filters.length - 1) && is_reporttype(design)) {
      let swimlane = metadata.Program2Swimlane[design.Program]
      swimstats[swimlane]++
    }
  }
}

//TO UPDATE
function displayswimstats () {
  for (swimlane of metadata.Swimlanes) {
    $(`#SwimlaneTotal${swimlane}`).html(swimstats[swimlane])
    swimstats[swimlane] == 0 ? $(`#SwimlaneTotal${swimlane}`).parent().fadeOut() : $(`#SwimlaneTotal${swimlane}`).parent().fadeIn()
  }
}


initswimstats()
computefilteredswimstat()
displayswimstats()


//TODO: create ISVstats and complete this
//Note for a matching ISV design: matchesfilter(design, filters, filters.length - 1) && metadata.ISVs.includes(design.AccountType)
//Or for non ISV design: matchesfilter(design, filters, filters.length - 1) && !metadata.ISVs.includes(design.AccountType)
function initISVstats () {
  for (program of metadata.Program) {
    ISVstats[program] = 0
  }
}

//TO UPDATE
function computefilteredISVstats() {
  // Save total designs for currently selected split to splitstats accordingly for later
  let filteredtotal = 0;
  for (design of designs) {
    if (matchesfilter(design, filters, filters.length - 1) && !is_reporttype(design)) {
      ISVstats[design.Program]++;
    }
  }
  //splitstats["ISVFiltered"] = filteredtotal;
}

//TO UPDATE
function displayISVstats () {
  let totalISVs = 0
  for (program of metadata.Program) {
    //update url
    let main_url_jq = $(`#${program}Url`);
    let ahref = main_url_jq.attr('href')
    ahref.includes('&sw=True') && reporttype == 'sw' ? ahref = ahref.replace('&sw=True', '') : false
    !ahref.includes('&sw=True') && reporttype == 'hw' ? ahref = ahref + '&sw=True' : false
    //update count
    var program_jqe = $(`#${program}ISV`)
    var alternate_string; reporttype == 'hw' ? alternate_string = "SW Partners" : alternate_string = "HW Designs"
    ISVstats[program] ? program_jqe.html(`<a href="${ahref}">+ ${ISVstats[program]} ${alternate_string}</a>`) : $(`#${program}ISV`).html('')
    totalISVs += ISVstats[program]
  }
  reporttype == 'hw' ? $("#totalISVs").html(totalISVs) : $("#totaldesigns").html(totalISVs)
  
}

initISVstats()
computefilteredISVstats()
displayISVstats()

/*

filters.forEach(filter => filter.Designs = designfilter(filter.Split,filter.Value,(filters.indexOf(filter) === 0 ? Object.assign(temp = [],designs) : Object.assign(temp = [],filteredresults[filters.indexOf(filter)-1]))))

TODO: Figure out which split/field was onclick'd (@done, see below)
TODO: Update ordered filter array (append/remove/clear [{'Vertical': 'RBHE'},{'GEO','APJ'}])  (@done, see below)
Filter designs obj based on filter selections (stats needed for each filter since they're chained):
 - See above... this doesn't work yet(?): filters.forEach(filter => filter.Designs = designfilter(filter.Split,filter.Value,(filters.indexOf(filter) === 0 ? designs : filters[filters.indexOf(filter)-1].designs)))
Compute stats at each non-hidden level (partially done - not robust yet nor impl. as a function)
Determine which splits should be hidden... (use class="d-none" to hide a block/col)
Update non-hidden splits with new stats
 - legenditem = '#legend' + split + item
 - $(legenditem).html(total)
 - $(legenditem).html(percentage.toFixed(0)+"%")
 - $(legenditem).attr("style","width: "+percentage.toFixed(1)+"%")
 - $(legenditem).attr("aria-valuenow",percentage.toFixed(0))
 - baritem = '#bar' + split + item
 - ...
 Update program stage progress
 Hide empty programs per filter (class="d-none" to hide a block/col)
 
 Order:
  - get original order, filter order, merge (remove filter order items, add to begining):
      var temp = defaultsplitorder.filter(function(splitorderitem) { return !(filterorder.includes(splitorderitem)) })
      var displayorder = filterorder.concat(temp)
  - apply order:
  Object.keys(displayorder).forEach(index => $('#split'+displayorder[index]).data('order',index))
  - re-order charts:
 $('#splits .split').sort(function(a,b){
    var aval = $(a).data('order');
    var bval = $(b).data('order');
    return (aval > bval) ? (aval > bval) ? 1 : 0 : -1;
 }).appendTo('#splits');
 
*/

//TODO: remove this old displaytotals code as comment:
/*function displaytotals () {
  for (stat in splitstats) {
    if (stat.startsWith("Total")) { //update totals
      let split = stat.slice("Total".length);
      let i = filterorder.indexOf(split);
      let text = "";
      if (i == 0) {
        //is first active filter
        text = `/ <a href="javascript:filters = []; filterorder = [];updatedisplay();updatehash()">${splitstats[stat]} Total</a>`;
      } else if (i > 0) { //is the second or greater active filter
        //dispaly total for this split (value from prior): splitstats[stat]
        let splitval = filters[i - 1].Split + filters[i - 1].Value;
        text = ' / <span data-filterindex="' + (i - 1) + '" class="badge badge-pill ' + splitval + '">' + splitstats[stat] + "</span> " + filters[i - 1].Value;
      } else if (filterorder.length > 0) { //else not yet an active filter
        let splitval = filters[filters.length - 1].Split + filters[filters.length - 1].Value;
        text = ' / <span data-filterindex="' + (filters.length - 1) + '" class="badge badge-pill ' + splitval + '">' 
          + splitstats["TotalFiltered"] + "</span> " + filters[filters.length - 1].Value;
      }
      $("#" + stat).html(text);
    }
  }
  $("#totaldesigns").html(splitstats["TotalFiltered"]);
}*/
//TO UPDATE
function displaytotals() {
  for (stat in splitstats) {
    if (stat.startsWith("Total")) {
      //update totals
      let split = stat.slice("Total".length);//kinda hacky way to figure out which "Total"...
      let i = filterorder.indexOf(split);
      let text = "";
      if (i == 0) {
        //is first active filter - show different view for the first...
        text = `/ <a href="javascript:filters = []; filterorder = [];updatedisplay();updatehash()">Reset to all ${splitstats[stat]}</a>`;
      } else if (i > 0) { //is the second+ active filter - default view
        //dispaly total for this split (value from prior): splitstats[stat]
        //todo: override for more than one filter value for a split to show / x <prior filter section (Division, Application, GEO, etc.)>
        splitselections = filters[i - 1].Value.length//one or more selections for this split?
        if (splitselections == 1) {
          lsplit = filters[i - 1].Split
          lvalue = filters[i - 1].Value[0]
          let splitval = lsplit + lvalue;//to update for .Value as array
          text = ` / <span class="badge badge-pill ${splitval}">${splitstats[stat]}</span> ${disp_nm(lsplit, lvalue)}`;
        } else {
          text = ` / ${splitstats[stat]} ${filters[i - 1].Split}`;
        }
      } else if (filterorder.length > 0) {
        //else not an active filter (display total after last filter) - same view as above, just with the data repeated to show context of this bar
        //todo: override for more than one filter value for a split to show / x <prior filter section (Division, Application, GEO, etc.)>
        splitselections = filters[filters.length - 1].Value.length//one or more selections for this split?
        if (splitselections == 1) {
          lsplit = filters[filters.length - 1].Split
          lvalue = filters[filters.length - 1].Value[0]
          let splitval = lsplit + lvalue;//to update for .Value as array
          text = ` / <span class="badge badge-pill ${splitval}">${splitstats["TotalFiltered"]}</span> ${disp_nm(lsplit, lvalue)}`;
        } else {
          text = ` / ${splitstats["TotalFiltered"]} ${filters[filters.length - 1].Split}`;
        }
      }
      $("#" + stat).html(text);
    }
  }
  reporttype == 'hw' ? $("#totaldesigns").html(splitstats["TotalFiltered"]) : $("#totalISVs").html(splitstats["TotalFiltered"])
  //$("#totaldesigns").html(splitstats["TotalFiltered"]);
}

//TO UPDATE
function displaysplitsorder() {
  // [Display] Apply order to split divs (data-order attr):
  Object.keys(displayorder).forEach((index) =>
    $("#split" + displayorder[index]).data("order", index)
  );
  // [Display] Re-order splits based on new data-order attr:
  $("#splits .split").sort(function (a, b) {
      var aval = $(a).data("order");
      var bval = $(b).data("order");
      return aval > bval ? (aval > bval ? 1 : 0) : -1;
    }).appendTo("#splits");
  // Determine which splits should be shown and not
  // Update the display to show and hide accordingly
  //  ref: #split<split> in displayorder class="col-12 mb-4 split" else class="col-12 mb-4 split d-none"
  //  ref: string.indexOf('string') == 0
  let hiddensplits = metadata.Splits.filter(function (splitorderitem) {
    return !(displayorder.indexOf(splitorderitem) >= 0);
  });
  // [Display] hide any in hiddensplits, display the rest
  for (split of metadata.Splits) {
    hiddensplits.indexOf(split) >= 0 ? $("#split" + split).fadeOut() : $("#split" + split).fadeIn();
  }
}


//TO UPDATE
function displayfilterpath() {
  filterpaths = filters.map( filter => { return filter.Value.map( value => {return `<span class="badge-pill ${filter.Split + value}">${disp_nm(filter.Split, value)}</span>`})})
  //['<span class="badge-pill VerticalVMC">VMC</span>']
  if (reporttype == 'hw') {
    $("#leftfiltername").html(filterpaths.join(" | ").split(",").join(""))
    $("#leftfilternamesw").html("")
  } else {
    $("#leftfilternamesw").html(filterpaths.join(" | ").split(",").join(""))
    $("#leftfiltername").html("")
  }
  filterpaths.length ? $("#rightfiltername").html(filterpaths.join(" | ").split(",").join("")) : $("#rightfiltername").html("All IOTG")
}


//display the bar graphs for each split (includes display of popovers as well)
function displaysplitbars() {
  //console.log(splitstats)
  removeallbarpopovers();
  for (stat in splitstats) {
    if (!stat.startsWith("Total")) {
      let isfilteredsplit = false;
      let isfilteredvalue = false;
      let isactive = false;
      for (filter of filters) {
        isfilteredsplit ||= stat.startsWith(filter.Split) ? true : false;
        //isfilteredvalue ||= stat.endsWith(filter.Value) ? true : false;//TODO: treat as array for multiple selections
        isfilteredvalue ||= filter.Value.reduce( (accum, value) => accum ||= stat.endsWith(value) ? true : false, isfilteredvalue );
      }
      isactive = !isfilteredsplit || (isfilteredsplit && isfilteredvalue) ? true : false;
      // Update bar
      let baritem = $("#bar" + stat);
      let barsplit = splitstats[stat].split;
      let barvalue = splitstats[stat].value;
      let bartotal = splitstats[stat].total;
      let barpercent = splitstats[stat].percentage;
      barpercent > 4 && showvalues ? baritem.html(barpercent.toFixed(0) + "%") : baritem.html(" ");
      baritem.attr("style", "width: " + barpercent.toFixed(1) + "%");
      baritem.attr("aria-valuenow", barpercent.toFixed(0));
      isactive ? baritem.attr("class", "progress-bar " + stat) : baritem.attr("class", `progress-bar ${stat} inactive`);
      baritem.popover({
        content: `<strong>${bartotal}</strong> Designs (${barpercent.toFixed(0)}% of ${splitstats["Total" + barsplit]})`,
        title: `<span class="badge-pill ${stat}">${disp_nm(barsplit, barvalue)}</span>`,
        trigger: "hover",
        html: true,
        placement: "top"
      });
    }
  }
  $("#splits.progress-bar").popover();
}

function displayremainingbarsatzero () {
  for (stat in splitstats) {
    if (!stat.startsWith("Total")) {
      let isfilteredsplit = false;
      for (filter of filters) {
        isfilteredsplit = isfilteredsplit || stat.startsWith(filter.Split) ? true : false;
      }
      // Update bar
      if (!isfilteredsplit) {
        let baritem = $("#bar" + stat);
        baritem.html(" ");
        baritem.attr("style", "width: " + 0 + "%");
        baritem.attr("aria-valuenow", 0);
      }
    }
  }
}


//display with proper counts (post filtered for not yet filtered splits, partial filter (or none for the first) for the other splits)
function displaysplitlegends() {
  for (stat in splitstats) {
    if (!stat.startsWith("Total")) {
      let isfilteredsplit = false;
      let isfilteredvalue = false;
      let isactive = false;
      for (filter of filters) {
        isfilteredsplit ||= stat.startsWith(filter.Split) ? true : false;
        isfilteredvalue ||= filter.Value.reduce( (accum, value) => accum ||= stat.endsWith(value) ? true : false, isfilteredvalue );
      }
      isactive =
        !isfilteredsplit || (isfilteredsplit && isfilteredvalue) ? true : false;
      let legenditem = "#legend" + stat;
      let legendsplit = splitstats[stat].split;
      let legendvalue = splitstats[stat].value;
      let legendtotal = splitstats[stat].total;
      $(legenditem).html(legendtotal);
      if (legendtotal == 0) {
        $(legenditem).parent().attr("class", "mr-2 legend-item d-none");
      } else {
        $(legenditem).parent().attr("class", "mr-2 legend-item");
        isactive
          ? $(legenditem).parent().attr("class", "mr-2 legend-item")
          : $(legenditem).parent().attr("class", "mr-2 legend-item text-muted");
        isactive
          ? $(legenditem).attr("class", "badge badge-pill " + stat)
          : $(legenditem).attr(
              "class",
              "badge badge-pill " + stat + " inactive"
            );
      }
    }
  }
}

//TO UPDATE
function displayprogramstages() {
  // [Display] Figure out which programs should be displayed based on filters selected
  for (program in stagestats) {
    stagestats[program].total == 0 ? $("#Program" + program).fadeOut() : $("#Program" + program).fadeIn()
  }
}

function displaystagebars () {
  for (program in stagestats) {
    $('#'+program+"Total").html(stagestats[program].total)
    for (milestone of metadata.Milestones) {
      let barstageitem = $('#bar'+program+milestone);
      let barstagepercent = stagestats[program][milestone].percentage;
      let barstagetotal = stagestats[program][milestone].total;
      (barstagepercent > 4 && showvalues) ? barstageitem.html(barstagepercent.toFixed(0) + "%") : barstageitem.html("");
      barstageitem.attr("style", "width: " + barstagepercent.toFixed(1) + "%");
      barstageitem.attr("aria-valuenow", barstagepercent.toFixed(0));
      barstageitem.popover({ content: '<strong>'+ barstagetotal +'</strong> Designs ('+ barstagepercent.toFixed(0) +'% of ' + stagestats[program].total + ')', 
                        title: '<span class="badge-pill bg-' + milestone + '">' + milestone + "</span>", 
                        trigger: 'hover', html: true, placement: 'top'});
    }
  }
}

function displaystagelegends () {
  for (program in stagestats) {
    for (milestone of metadata.Milestones) {
      let legendstageitem = $('#legend'+program+milestone)
      let stagetotal = stagestats[program][milestone].total
      legendstageitem.html(stagetotal);
      stagetotal == 0 ? legendstageitem.parent().attr("class", "mr-3 text-muted") : legendstageitem.parent().attr("class", "mr-3")
    }
  }
}

function removeallbarpopovers() {
  $("#splits .progress-bar").popover("dispose");
}



//onclick handling
/*
# Bars
ID: #bar<split><value>
classes: progress-bar, bg-*
$('.progress-bar').off('click');
$('#barVerticalISD').parent().children().attr('class');
var filters = [{Split: 'Program', Value:'WHL'}, {Split: 'GEO', Value:'PRC'}];
var filters = [{Split: 'Vertical', Value:'VMC'}, {Split: 'GEO', Value:'PRC'}];
*/
$("#splits .progress-bar").click(function (e) {
  modifieractive = e.metaKey || e.ctrlKey
  selectedsplit = $(this).data("split")
  selectedsplitvalue = $(this).data("splitvalue")
  // Update filters based on selection
  updatefiltersforselection($(this), selectedsplit, selectedsplitvalue, modifieractive)
  updatehash();
  displaysplitlegends();
  displaysplitbars();
  updatedisplay();//refresh stats and update the rest of the display
});

$("#splits .legend-item").click(function (e) {
  // Get clicked on item
  modifieractive = e.metaKey || e.ctrlKey
  selectedsplit = $(this).data("split")
  selectedsplitvalue = $(this).data("splitvalue")
  // Update filters based on selection
  updatefiltersforselection($(this), selectedsplit, selectedsplitvalue, modifieractive)
  updatehash();
  displaysplitlegends();
  displaysplitbars();
  updatedisplay();//refresh stats and update the rest of the display
  });

//@Done?
//TODO: prevent double selection
function updatefiltersforselection (jqthis, selectedsplit, selectedsplitvalue, modifieractive) {
  // First, figure out if this split was selected before and what it's index in filters is:
  let existingfilteridx = false;
  let i = 0;
  for (filter of filters) {
    if (filter.Split === selectedsplit) {
      existingfilteridx = i;
    }
    i++;
  }
  //update filters to include the new filter that was selected
  if (existingfilteridx !== false) {
    //replace existing with new selection and clear the rest or add depending on modifier key
    if (modifieractive) {
        //add additional value or remove if already exists
        if (filters[existingfilteridx].Value.filter((value, index, arr) => value == selectedsplitvalue).length == 0)
          filters[existingfilteridx].Value.push(selectedsplitvalue)
        else
          filters[existingfilteridx].Value = filters[existingfilteridx].Value.filter((value, index, arr) => value != selectedsplitvalue)
        //if nothing at this level is selectd, remove this level from the filter
        filters[existingfilteridx].Value == 0 ? filters.splice(existingfilteridx,1) : false
    } else {
        filters = filters.slice(0, existingfilteridx + 1);
        filters[existingfilteridx] = {
          Split: selectedsplit,
          Value: [selectedsplitvalue]
        };
    }
  } else {
    //add to the end of the filter list
    //ADDED 3/7/22 (handle modifier key for first selection - select all but that one)
    new_val_array = [selectedsplitvalue]
    if (modifieractive) {
      new_val_array = metadata[selectedsplit].filter(item => item != selectedsplitvalue).map(val => id_str(val))
      console.log(new_val_array)
    }
    filters.push({
      Split: selectedsplit,
      Value: new_val_array
    });
  }
  //refresh filterorder based on what's now in filters:
  filterorder = [];
  filters.forEach((filter) => filterorder.push(filter.Split));
}


function removeallbarpopovers () {
  $('.progress-bar').popover('dispose');
}

//TO UPDATE
function updatedisplay () {
  // init splitstats to null/zero
  initsplitstats();
  initstages();
  initswimstats();
  initISVstats();
  
  //compute totals for each stat:
  computesplitstats();
  computestagestats();
  computefilteredtotalstat();
  computesplitsdisplayorder();
  computefilteredswimstat();
  computefilteredISVstats();

  //removeallbarpopovers();
  
  //start updating the display
  displaytotals();
  displayfilterpath();
  displaystagelegends();
  displayreporttype(); // ADDED
  displaykostats(); // ADDED
  setTimeout(displaystagebars,250); // UPDATED delay
  setTimeout(displayprogramstages,250); // UPDATED delay
  setTimeout(displayswimstats, 250); // UPDATED delay
  setTimeout(displayISVstats, 250); // UPDATED delay
  setTimeout(displaysplitsorder,250); // UPDATED delay
  setTimeout(displayremainingbarsatzero,200); // UPDATED delay
  setTimeout(displaysplitbars,650);
  displaysplitlegends();
  //
}

/*
$('.legend-item').off('click')
$('.legend-item').click(function(){ console.log($(this).children().attr('id'))})

if selected, do nothing; else:
if there's another within this split selected: update the filter value (filters.Value); move to last in filterorder; update css classes for this split:
get all legend and bar items for this split
remove css classes (bar: bg-<split>-<value>-<state>; legend: badge-<split>-<value>-<state>)
apply disabled classes or apply enabled class
bind/re-draw everything (apply filters, get stats, update charts)

classfilter("^bg-",$('#barVerticalRBHE').attr('class'))

function classfilter(classre,classstring) {
  classarray = classstring.split(' ')
  re = new RegExp(classre);
  return classarray.filter(function (arrdata) {
    return re.test(arrdata);
  })
}
*/

//https://javascript.info/settimeout-setinterval
//let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)
//should replace with promises
/*
setTimeout( function() { $("#totaldesigns").html("137"); 
setTimeout( function() { $("#totaldesigns").html("100"); 
           setTimeout( function(){ $("#totaldesigns").html("71"); 
                      setTimeout( function(){ $("#totaldesigns").html("44"); 
                                 setTimeout( function(){ $("#totaldesigns").html("40"); 
                                            setTimeout( function(){ $("#totaldesigns").html("38"); 
                                                       setTimeout( function(){ $("#totaldesigns").html("36"); 
                                                                  setTimeout( function(){ $("#totaldesigns").html("35") }, 160) 
                                                       }, 130) 
                                            }, 100) 
                                 }, 80)
                      }, 70)
           }, 60)
}, 60)
}, 1200)
*/