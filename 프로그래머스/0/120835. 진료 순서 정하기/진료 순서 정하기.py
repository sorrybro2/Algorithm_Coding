def solution(emergency):

    original = emergency[:];
    
    sort = sorted(emergency, reverse=True);
    
    return [sort.index(v)+1 for v in original]