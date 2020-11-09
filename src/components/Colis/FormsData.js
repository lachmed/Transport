
const FormsData = [
                {
                    legend: "Veillez donner les informations de votre colis :",
                    Reference: {
                                    label: "Référence:",
                                    input: {
                                                 type: "text",
                                                 name: "nomColis",
                                              }
                                },
                    Poids: {
                                    label: "Poids(kg):",
                                    input: {
                                                 type: "number",
                                                 name: "poids",
                                              }
                                },
                    Type: {
                                    label: "Type:",
                                    input: {
                                                 type: "text",
                                                 name: "type",
                                              }
                                },
                    Fragile: {
                                    label: "Fragile:",
                                    input1: {
                                                 type: "radio",
                                                 name: "Fragile",
                                                 value:"oui"
                                              },
                                    input2: {
                                                type: "radio",
                                                name: "Fragile",
                                                value:"non"
                                             }
                                },
                DateEnvoie: {
                                    label: "Date d'envoie:",
                                    input: {
                                                 type: "date",
                                                 name: "dateEnvoie",
                                              }
                                }
                
                },
                {
                  legend: "Veillez donner vos informations:",
                  Nom: {
                                  label: "Nom:",
                                  input: {
                                               type: "text",
                                               name: "nomPersoColis",
                                            }
                              },
                  Prenom: {
                                  label: "Prénom:",
                                  input: {
                                               type: "text",
                                               name: "prenomPersoColis",
                                            }
                              },
                  CIN: {
                                  label: "CIN:",
                                  input: {
                                               type: "text",
                                               name: "cinPersoColis",
                                            }
                              },
                  Tel: {
                                  label: "Tel:",
                                  input: {
                                               type: "text",
                                               name: "telPersoColis",
                                            },
                              },
              Addresse: {
                                  label: "Addresse:",
                                  textarea:{
                                       name:"addresseDepart",
                                       cols:"40",
                                       rows:"3"
                                          }
                         }
              
              },
              {
               legend: "Veillez donner les informations de votre destinatire:",
               Nom: {
                               label: "Nom:",
                               input: {
                                            type: "text",
                                            name: "nomDestColis",
                                         }
                           },
               Prenom: {
                               label: "Prénom:",
                               input: {
                                            type: "text",
                                            name: "prenomDestColis",
                                         }
                           },
               CIN: {
                               label: "CIN:",
                               input: {
                                            type: "text",
                                            name: "cinDestColis",
                                         }
                           },
               Tel: {
                               label: "Tel:",
                               input: {
                                            type: "text",
                                            name: "telDestColis",
                                         },
                           },
           Addresse: {
                               label: "Addresse:",
                               textarea:{
                                    name:"addresseArrive",
                                    cols:"40",
                                    rows:"3"
                                       }
                      }
           
           }
];
export default FormsData;