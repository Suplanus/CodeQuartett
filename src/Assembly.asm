.model tiny
.code
org 100h

main  proc

      mov    ah,9
      mov    dx,offset hello_message
      int    21h
 
      retn


hello_message db 'Hello world$'
 
main  endp
end   main