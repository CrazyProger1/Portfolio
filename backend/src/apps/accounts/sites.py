from unfold.sites import UnfoldAdminSite


class AdminSite(UnfoldAdminSite):
    pass


site = AdminSite(name="admin")
