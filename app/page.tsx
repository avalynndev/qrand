"use client"
import { useState, useEffect, useRef } from "react";
import { Logo } from "@/components/logo";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { defaultQROptions, QROptions } from "@/types";
import QRCodeStyling from "qr-code-styling";

export default function Home() {
  const [options, setOptions] = useState<QROptions>(defaultQROptions)
  const [qrcode, setQrCode] = useState<QRCodeStyling | null>(null)
  const [isValidUrl, setIsValidUrl] = useState(false)
  const [logoFile, setLogoFile] = useState<File | null>(null)
  const [isGenerating, setIsGenerating] = useState(false);
  const qrRef = useRef<HTMLDivElement>(null)
  const fileInputRef = useRef<HTMLDivElement>(null)


  return (
    <div>
      <Logo />
    </div>
  );
}
