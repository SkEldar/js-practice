
class Giraffes:
    def left_foot_forward(self):
        print('left leg is forward')

    def left_foot_back(self):
        print('left leg is back')

    def right_foot_forward(self):
        print('right leg is forward')

    def right_foot_back(self):
        print('right lef is back')

    def dance(self):
        self.left_foot_forward()
        self.left_foot_back()
        self.right_foot_forward()
        self.right_foot_back()


harold = Giraffes()
harold.dance()
