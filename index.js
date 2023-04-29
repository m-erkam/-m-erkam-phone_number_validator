function validate(phone_number) {
    const expression = /^(05\d{9}|5\d{9})$/;

    if (phone_number) {
        if (expression.test(phone_number)) {
            return true;
        }

    }else{
        return false;
    }

}