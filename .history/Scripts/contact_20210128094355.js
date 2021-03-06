"use strict";
class Contact 
{
    //getters and setters
    get FullName() 
    {
      return this.m_fullName;
    }
    set FullName(value) 
    {
      this.m_fullName = value;
    }
    //get/set contact number
    get ContactNumber() 
    {
      return this.m_contactNumber;
    }
    set ContactNumber(value) 
    {
      this.m_contactNumber = value;
    }
    //get/set email
    get EmailAddress() 
    {
      return this.m_emailAddress;
    }
    set EmailAddress(value) 
    {
      this.m_emailAddress = value;
    }
  
    //Constructor
    /**
     * Contact Class Constructor
     * 
     * @param {string} [fullName=""] the user's full name
     * @param {string} [contactNumber=""] The user's contact number
     * @param {string} [emailAddress=""] The user's email address
     * @memberof Contact
     */
    constructor(fullName = "", contactNumber = "", emailAddress = "") {
      this.m_fullName = fullName;
      this.m_contactNumber = contactNumber;
      this.m_emailAddress = emailAddress;
    }
  
    //Methods
    
   toString() 
   {
     return `Full Name     : ${this.m_fullName} \nContact Number: ${this.m_contactNumber}\nEmail Address : ${this.m_emailAddress}`;
   }

   /**
    * This method returns a JSON object made up of the properties of the Contact class
    *
    * @returns {Object}
    */
   toJSON()
   {
     return {
       "fullName": this.fullName,
       "contactNumber": this.contactNumber,
       "emailAddress": this.emailAddress
     }
   }

    serialize()
    {
      return `${this.m_fullName},${this.m_contactNumber},${this.m_emailAddress}`;
    }

    deserialize()
    {

    }

  }