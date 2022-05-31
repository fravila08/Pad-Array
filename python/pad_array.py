#REMEMBER TO PSEUDOCODE
def pad(array, min_size, value = None):
    if min_size == 0 or min_size == len(array):
        return array
    else:
        itirate= min_size - len(array)
        while itirate != 0:
            array.append(value)
            itirate= itirate-1
    return array
    