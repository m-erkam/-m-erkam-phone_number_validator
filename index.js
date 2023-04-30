export function validate(phone_number, country) {
    const countries = {TR: /^((05|5)\d{9}|5\d{9})$/,
                        US : /^(1\s?)?(\([0-9]{3}\)|[0-9]{3})[0-9]{3}[0-9]{4}$/};

    if (phone_number) {
        if (country in countries) {
            var expression = countries.country;
            if (expression.test(phone_number)) {
                return true;
            }
        }else {
            for(const key in countries){
                var expression = countries[key];
                if (expression.test(phone_number)) {
                    return true;
                }
            }
        }
        
    }else{
        return false;
    }
}