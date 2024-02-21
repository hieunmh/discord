"use client";

import axios from "axios";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

import { useRouter } from "next/navigation";
import { useModal } from "@/hooks/use-modal-store";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { CheckIcon, Copy, RefreshCw } from "lucide-react";
import { useOrigin } from "@/hooks/use-origin";
import { useState } from "react";

export const InviteModal = () => {

  const { isOpen, onClose, onOpen, type, data } = useModal();
  const origin = useOrigin();
  const router = useRouter();

  const isModalOpen = isOpen && type === "invite";

  const [copied, setCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const inviteUrl = `${origin}/invite/${data.server?.inviteCode}`;

  const onCopy = () => {
    navigator.clipboard.writeText(inviteUrl);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  }

  const onNew = async () => {
    try {
      setIsLoading(true);
      const res = await axios.patch(`/api/servers/${data.server?.id}/invite-code`);

      onOpen("invite", { server: res.data });
    
    } catch (error) {

    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <Dialog open={isModalOpen} onOpenChange={onClose}>
        <DialogContent className="bg-white text-black p-0 overflow-hidden">
          <DialogHeader className="pt-8 px-6">
            <DialogTitle className="text-xl text-center font-bold">
              Invite Friends
            </DialogTitle>
          </DialogHeader>
          
          <div className="p-6">
            <Label className=" uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
              Server invite link
            </Label>
            <div className="flex items-center mt-2 gap-x-2">
              <Input className="bg-zinc-100 border-r-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0" 
                value={inviteUrl} disabled={isLoading}
              />
              <Button disabled={isLoading} onClick={onCopy} size="icon">
                {copied ? <CheckIcon className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </Button>
            </div>

            <Button disabled={isLoading} variant="link" onClick={onNew}
              size="sm" className="text-xs text-zinc-500 mt-4"
            >
              Generate a new link
              <RefreshCw className="w-4 h-4 ml-2" />
            </Button>
            
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
 