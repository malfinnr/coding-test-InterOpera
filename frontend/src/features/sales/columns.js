import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import formatPrice from "@/lib/formatPrice";

export const columns = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown />
        </Button>
      );
    },
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    accessorKey: "region",
    header: "Region",
  },
  {
    accessorKey: "skills",
    header: "Skills",
    cell: (info) => info.getValue().join(", "),
  },
  {
    accessorKey: "deals",
    enableHiding: true,
  },
  {
    accessorKey: "clients",
    enableHiding: true,
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const statuses = {
        "Closed Won": "text-green-700 bg-green-50",
        "In Progress": "text-yellow-700 bg-yellow-50",
        "Closed Lost": "text-red-700 bg-red-50",
      };
      return (
        <div className="flex items-center gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">View Deals</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Sales Rep Deals</DialogTitle>
                <div>
                  <ul className="divide-y divide-gray-100">
                    {row.getValue("deals").map((deal, index) => (
                      <li
                        key={index}
                        className="py-5 flex items-center justify-between gap-6"
                      >
                        <div className="space-y-1">
                          <strong>{deal.client}</strong>
                          <p className="text-sm text-gray-500">
                            {formatPrice(deal.value)}
                          </p>
                        </div>
                        <div className="flex">
                          <div
                            className={`px-2 py-1 text-sm font-medium rounded-full ${
                              statuses[deal.status]
                            }`}
                          >
                            {deal.status}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">View Clients</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Sales Rep Clients</DialogTitle>
                <div>
                  <ul className="divide-y divide-gray-100">
                    {row.getValue("clients").map((client, index) => (
                      <li
                        key={index}
                        className="py-5 flex items-center justify-between gap-6"
                      >
                        <div className="space-y-1">
                          <strong>{client.name}</strong>
                          <p className="text-sm text-gray-500">
                            {client.contact}
                          </p>
                        </div>
                        <div className="flex">
                          <div className="text-sm font-medium">
                            {client.industry}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      );
    },
  },
];
