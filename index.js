export function validate(phone_number, country) {
//    const expression = /^(05\d{9}|5\d{9})$/;
    const countries = {TR: /^(05\d{9}|5\d{9})$/, 
                        US : /^(\\+?1)?[2-9]\\d{2}[2-9](?!11)\\d{6}$/};

    if (phone_number) {
        if (country in countries) {
            var expression = countries.country;
            if (expression.test(phone_number)) {
                return true;
            }
        }else {
            for(const key in countries){
                if (condition) {
                    
                }
            }
        }
        
    }else{
        return false;
    }
}