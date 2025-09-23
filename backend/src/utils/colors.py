import random


def random_hex_color():
    return "#{:06x}".format(random.randint(0, 0xFFFFFF))
