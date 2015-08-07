for n = 1:259
    if strcmp(time(n,1), time(n+1,1))
        size1(n+1,1)=size1(n+1,1)+size1(n,1);
    else
        size1(n,2)=size1(n,1);
    end
end

        
        