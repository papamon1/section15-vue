module.exports=function(io){
    io.on('connection', function(socket){
        console.log('connection has been established');
        
        //Esto viene del cliente
        socket.on('meetup/postSave', function(post){
            //Para el cliente
            io.emit('meetup/postPublished', post)
        })
    })
}

