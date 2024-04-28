class Chef extends Person{
    private licenseNumber: string;
    
    constructor(personId: number, personName: string, personAddress: string, personEmail: string, personPhone: number, licenseNumber: string) {
        super(personId, personName, personAddress, personEmail, personPhone);
        this.licenseNumber = licenseNumber;
    }
}