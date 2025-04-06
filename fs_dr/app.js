const fs = require('fs');


// create a directory

//Asyncronous method
// fs.mkdir('newDir',(err) =>{
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log('Directory created successfully!');
// })

// // Synchronous method
// fs.mkdirSync('newDirSync');
// console.log('Directory created successfully!');


// 2. Read a directory

// fs.readdir('.././',(err,files)=>{
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log(' Directory contents:',files);
// })

// const files = fs.readdirSync('.././');
// console.log('Directory contents:',files);


// 3. Check if a directory exists

// const dirname = 'newDir';
// const dirname = 'newDir1';

// if(fs.existsSync(dirname)){
//     console.log(`${dirname} exists.`); }
// else{
//     console.log(`${dirname} does not exist.`);
// }


// 4. Remove a directory

// fs.rmdir('newDirSync',(err)=>{
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log('Directory removed successfully!');
// });
// // rmdir methods only remove  the empty directories



// fs.rm('newDirSync',{recursive:true},(err)=>{
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log('Directory removed successfully!');

// });  // this method removes both empty and non-empty directories


// 5. Rename a directory

// fs.rename('newDir','renamedDir',(err)=>{
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log('Directory renamed successfully!');
// })


// 6. Getting Directory Information
// fs.stat('renamedDir',(err,stats)=>{
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log('Directory information:',stats);
//     console.log('Is Directory:', stats.isDirectory());
// })


// 7. Watching a directory for changes

fs.watch('newDir',(eventType,filename)=>{
    console.log(`Event: ${eventType}`);
    if(filename){
        console.log(`Filename: ${filename}`);}
});


