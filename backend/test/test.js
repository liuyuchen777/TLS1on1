import bcrypt from 'bcrypt';

const salt = bcrypt.genSaltSync(10);
const password = "123456";
const passwordHash = "$2b$10$Gx/lnnVEWZuq1ZJEtA/hb.ErNd1xhlPC1T5OtoA5amVDxC3xAm7bi";

// console.log(bcrypt.hashSync(password, salt));

bcrypt.compare(password, passwordHash).then(function(result) {
    console.log(result);
    console.log("Same!");
});

console.log(new Date().toISOString());